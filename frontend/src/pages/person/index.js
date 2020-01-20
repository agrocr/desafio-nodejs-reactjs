import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer } from "react-toastify";

import "./styles.css";
import "react-confirm-alert/src/react-confirm-alert.css";

import Notifications from "../../components/Notifications";
import NotificationRedirect from "../../components/NotificationRedirect";

export default class Person extends Component {
  state = {
    person: {}
  };

  /* async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`people/${id}`);

    this.setState({ person: response.data });
  } */

  async componentDidMount() {
    this.loadPerson();
  }

  loadPerson = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`people/${id}`);

    this.setState({ person: response.data });
  };

  confirmDelete = async () => {
    console.log("dentro confirm");

    confirmAlert({
      title: "Atenção",
      message: "Tem certeza que deseja excluir esse cadastro?",
      buttons: [
        {
          label: "Sim",
          onClick: async () => {
            const { id } = this.state.person;

            const response = await api.delete(`people/delete/${id}`);
            console.log(response);
            if (response.data.message === "Person has been deleted") {
              NotificationRedirect(
                "success",
                "Cadastro excluido com sucesso!",
                "/"
              );
              // this.props.history.push('/')
            } else {
              Notifications(
                "error",
                `Ops, algo deu errado, por favor envie o erro a seguir para o setor de TI: ${response.data}`
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

  deletePerson = async () => {};

  render() {
    const { person } = this.state;
    var status;
    var sexo;

    if (person.ativo === true) {
      status = "ATIVO";
    } else {
      if (person.ativo === false) {
        status = "INATIVO";
      } else {
        status = "N/A";
      }
    }

    if (person.sexo === "M") {
      sexo = "MASCULINO";
    } else {
      if (person.ativo === "F") {
        sexo = "FEMININO";
      } else {
        sexo = "INDEFINIDO";
      }
    }

    return (
      <div className="person">
        <div className="person-info">
          <h1>{person.nome}</h1>
          <p>Codigo: {person.id}</p>
          <p>CPF: {person.cpf}</p>
          <p>Idade: {person.idade}</p>
          <p>Sexo: {sexo}</p>
          <p>Telefone: {person.telefone}</p>
          <p>Email: {person.email}</p>
          <p>Status: {status}</p>
        </div>
        <div className="return">
          <Link to="/" className="linkReturn">
            <button className="btnReturn">Voltar</button>
          </Link>
          <button className="btnDelete" onClick={this.confirmDelete}>
            Excluir
          </button>
          <Link to="/update/person" className="linkEdit">
            <button>Editar</button>
          </Link>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
