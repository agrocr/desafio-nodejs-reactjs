import React, { Component } from "react";

import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    this.loadPeople();
  }

  loadPeople = async () => {
    const response = await api.get("/people");

    this.setState({ people: response.data });

    console.log(response.data);
  };

  render() {
    const { people } = this.state;

    return (
      <div className="people-list">
        {people.map(people => (
          <article key={people.id}>
            <strong>{people.nome}</strong>
            <p>{people.email}</p>
            <a href="">Editar</a>
          </article>
        ))}
      </div>
    );
  }
}
