import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";

export default class Main extends Component {
  state = {
    people: [],
    peopleInfo: {},
    pageNumber: 1
  };

  componentDidMount() {
    this.loadPeople();
  }

  loadPeople = async (page = 1) => {
    const response = await api.get(`/people/paginate?page=${page}`);

    //console.log(response.data.pageNumber);

    /* const { docs } = response.data.people; */
    const { docs, ...peopleInfo } = response.data.people;
    const { pageNumber } = response.data;

    this.setState({ people: docs, peopleInfo, pageNumber });
  };

  prevPage = () => {
    const { pageNumber } = this.state;

    const prevPage = parseInt(pageNumber) - 1;

    if (prevPage < 1) return;

    this.loadPeople(prevPage);
  };

  nextPage = () => {
    const { peopleInfo, pageNumber } = this.state;
    //console.log(this.state.pageNumber);
    /* 
    let pageNumber = 1; */
    const nextPage = parseInt(pageNumber) + 1;
    // console.log(nextPage);

    if (nextPage > peopleInfo.pages) return;

    /*console.log(pageNumber); */

    this.loadPeople(nextPage);
  };

  render() {
    const { people, pageNumber, peopleInfo } = this.state;

    return (
      <div className="people">
        <div className="new-person">
          <Link to="/create/person">
            <button>Novo</button>
          </Link>
        </div>
        <div className="people-list">
          {people.map(people => (
            <article key={people.id}>
              <strong>{people.nome}</strong>
              <p>{people.email}</p>
              <Link to={`/person/${people.id}`}>Acessar</Link>
            </article>
          ))}
        </div>
        <div className="actions">
          <button disabled={parseInt(pageNumber) === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button
            disabled={
              parseInt(pageNumber) === peopleInfo.pages ||
              peopleInfo.pages === 0
            }
            onClick={this.nextPage}
          >
            Proximo
          </button>
        </div>
      </div>
    );
  }
}
