import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

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
    this.deletePerson()
  }

  loadPerson = async () => { 
    const { id } = this.props.match.params;

    const response = await api.get(`people/${id}`);

    this.setState({ person: response.data });
  };

  deletePerson = async () => { 
    const { id } = this.state.person;

    const response = await api.delete(`people/delete/${id}`);

    console.log(response);
    
  };

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
          <button className="btnDelete" onClick={this.deletePerson}>Excluir</button>
          <Link to="/update/person" className="linkEdit">
            <button>Editar</button>
          </Link>
        </div>
      </div>
    );
  }
}
