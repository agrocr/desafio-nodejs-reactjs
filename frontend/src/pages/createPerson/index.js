import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.css";

import api from "../../services/api";
import Notifications from "../../components/Notifications";

function CreatePerson() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [ativo, setAtivo] = useState("");

  async function handleAddPerson(e) {
    e.preventDefault();

    console.log(
      `nome:${nome}, cpf:${cpf}, idade:${idade}, sexo:${sexo}, telefone:${telefone}, email:${email}, ativo:${ativo}`
    );

    const response = await api.post("/people/create", {
      nome,
      cpf,
      idade,
      sexo,
      telefone,
      email,
      ativo
    });
    console.log(nome, cpf, idade, sexo, telefone, email, ativo);

    console.log(response.data);
    if (response.data.message === "Person successfully inserted") {
      Notifications("success", "Cadastro efetuado com sucesso!");
      setNome("");
      setCpf("");
      setIdade("");
      setSexo("");
      setTelefone("");
      setEmail("");
      setAtivo("");
    } else if (response.data.error === "CPF already exists") {
      Notifications("warning", "O CPF digitado já está cadastrado, verifique!");
    } else if (response.data.error === "Invalid cpf") {
      Notifications("warning", "O CPF digitado é inválido, verifique!");
    } else if (response.data.error === "Email already exists") {
      Notifications(
        "warning",
        "O Email digitado já está cadastrado, verifique!"
      );
    } else if (response.data.error) {
      Notifications(
        "error",
        `Ops, Page: Create person, ERROR: ${response.data.error}`
      );
    } else {
      Notifications(
        "error",
        `Ops, algo deu errado, envie o erro a seguir para o setor de TI: ${response.data.error} `
      );
    }
  }

  return (
    <div id="app">
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddPerson}>
        <div className="input-block">
          <label htmlFor="nome">Nome:</label>
          <input
            name="nome"
            id="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="cpf">CPF:</label>
          <input
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            pattern="[0-9]{11}"
            title="Preencha apenas com números e exatamente 11 caracteres."
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="idade">Idade:</label>
          <input
            name="idade"
            id="idade"
            type="number"
            min="0"
            max="120"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="sexo">Sexo:</label>
          <select
            name="sexo"
            id="sexo"
            value={sexo}
            onChange={e => setSexo(e.target.value)}
            required
          >
            <option value="" defaultValue>
              -- Escolha uma opção --
            </option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="I">Prefiro não dizer</option>
          </select>
        </div>

        <div className="input-block">
          <label htmlFor="telefone">Telefone:</label>
          <input
            name="telefone"
            id="telefone"
            type="tel"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            pattern="[0-9]{10,11}"
            title="Preencha apenas com números, no mínimo 10 e no máximo 11 caracteres. (Ex.: 11998764321)"
          />
        </div>

        <div className="input-block">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Preencha um email valido. Contendo: 'cacteres'@'caracteres'.'dominio'"
            placeholder="seumelhorendereco@email.com"
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="ativo">Status:</label>
          <select
            name="ativo"
            id="ativo"
            value={ativo}
            onChange={e => setAtivo(e.target.value)}
            required
          >
            <option value="" defaultValue>
              -- Escolha uma opção --
            </option>
            <option value="true">ATIVO</option>
            <option value="false">INATIVO</option>
          </select>
        </div>
        <div className="button-group">
          <Link to={"/"}>
            <button type="button" className="btnReturn">
              Voltar
            </button>
          </Link>

          <button type="submit">Salvar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
export default CreatePerson;
