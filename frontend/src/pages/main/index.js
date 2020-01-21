import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.css";

import Notifications from "../../components/Notifications";

export default class Main extends Component {
  state = {
    people: [],
    peopleInfo: {},
    pageNumber: 1,
    personId: ""
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

    console.log(docs, peopleInfo, pageNumber);

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

  findPerson = async () => {
    const { personId } = this.state;
    const response = await api.get(`/people/${personId}`);

    // console.log(response.data);
    if (personId !== "") {
      if (response.data.error === "ID not found") {
        // this.loadPeople();
        Notifications("info", "Nenhum registro encontrado.");
      } else {
        const docs = [response.data];
        const peopleInfo = { pages: 1, total: 1 };
        const pageNumber = "1";

        console.log(docs, peopleInfo, pageNumber);

        this.setState({ people: docs, peopleInfo, pageNumber });
      }
    } else {
      this.loadPeople();
    }
  };

  inputEmpty = () => {
    const { personId } = this.state;
    console.log(personId);

    if (personId == "") {
      console.log("inputEmpty");

      this.loadPeople();
    }
  };

  render() {
    const { people, pageNumber, peopleInfo, personId } = this.state;

    return (
      <div className="people">
        <div className="person">
          <form>
            <input
              name="personId"
              id="personId"
              type="text"
              value={personId}
              onChange={e => this.setState({ personId: e.target.value })}
              onKeyUp={this.inputEmpty}
              placeholder="Código do registro"
            ></input>
            <button type="button" onClick={this.findPerson}>
              Pesquisar
            </button>
          </form>

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
          <label>Page: {pageNumber}</label>
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
        <ToastContainer />
      </div>
    );
  }
}
