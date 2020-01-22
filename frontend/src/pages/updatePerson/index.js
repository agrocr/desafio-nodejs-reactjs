import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer } from "react-toastify";

import "./styles.css";
import "react-confirm-alert/src/react-confirm-alert.css";

import Notifications from "../../components/Notifications";

export default class UpdatePerson extends Component {
  //cria o state
  state = {
    id: "",
    cpf: "",
    nome: "",
    idade: "",
    sexo: "",
    telefone: "",
    email: "",
    ativo: "",
    createdAt: "",
    updatedAt: ""
  };

  async componentDidMount() {
    this.loadPerson();
  }

  loadPerson = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`people/${id}`);

    this.setState(response.data);
  };

  handleAlterPerson = async e => {
    e.preventDefault();

    const person = this.state;

    confirmAlert({
      title: "Atenção",
      message: "Tem certeza que deseja salvar esse cadastro?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            var nomeLower = person.nome.toLowerCase();
            var emailLower = person.email.toLowerCase();

            const response = await api.put(`/people/update/${person.id}`, {
              nome: nomeLower,
              cpf: person.cpf,
              idade: person.idade,
              sexo: person.sexo,
              telefone: person.telefone,
              email: emailLower,
              ativo: person.ativo
            });

            if (response.data.message === "Person has been updated") {
              Notifications("success", "Cadastro alterado com sucesso!");
              this.loadPerson();
            } else if (response.data.error === "CPF already exists") {
              Notifications(
                "warning",
                "O CPF digitado já está cadastrado, verifique!"
              );
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
                `Ops, algo deu errado, envie o erro a seguir para o setor de TI: ${response.data} `
              );
            }
          }
        },
        {
          label: "Não",
          onClick: () => {}
        }
      ]
    });
  };

  render() {
    const person = this.state;

    return (
      <div id="app">
        <strong>Alterar</strong>
        <form onSubmit={this.handleAlterPerson}>
          <div className="input-block">
            <label htmlFor="nome">Nome:</label>
            <input
              name="nome"
              id="nome"
              value={person.nome}
              onChange={e => this.setState({ nome: e.target.value })}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="cpf">CPF:</label>
            <input
              name="cpf"
              id="cpf"
              value={person.cpf}
              onChange={e => this.setState({ cpf: e.target.value })}
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
              value={person.idade}
              onChange={e => this.setState({ idade: e.target.value })}
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="sexo">Sexo:</label>
            <select
              name="sexo"
              id="sexo"
              value={person.sexo}
              onChange={e => this.setState({ sexo: e.target.value })}
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
              value={person.telefone}
              onChange={e => this.setState({ telefone: e.target.value })}
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
              value={person.email}
              onChange={e => this.setState({ email: e.target.value })}
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
              value={person.ativo}
              onChange={e => this.setState({ ativo: e.target.value })}
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
            <Link to={`/person/${person.id}`}>
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
}
