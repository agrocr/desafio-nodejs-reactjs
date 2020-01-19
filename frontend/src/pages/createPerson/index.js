import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import api from "../../services/api";

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
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
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
            <button type="button">Voltar</button>
          </Link>

          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
export default CreatePerson;
