import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./styles.css";

import Notifications from "../../components/Notifications";

export default class Main extends Component {
  //declara os states
  state = {
    people: [],
    peopleInfo: {},
    pageNumber: 1,
    personName: ""
  };

  //Executa que está dentro do metodo toda vez que o componente é rederizado
  componentDidMount() {
    this.loadPeople();
  }

  //objeto que pega o dados dos registros por meio da API e armazena no state
  loadPeople = async (page = 1) => {
    //requisição na API
    const response = await api.get(`/people/paginate?page=${page}`);

    //Armazena as respostas em constantes
    const { docs, ...peopleInfo } = response.data.people;
    const { pageNumber } = response.data;

    //seta os dados da response no state
    this.setState({ people: docs, peopleInfo, pageNumber });
  };

  //objeto que faz a mudança para a pagina anterior
  prevPage = () => {
    const { pageNumber } = this.state;

    const prevPage = parseInt(pageNumber) - 1;

    if (prevPage < 1) return;

    //chama objeto que pega o dados dos registros por meio da API e armazena no state
    this.loadPeople(prevPage);
  };

  //objeto que faz a mudança para a próxima pagina
  nextPage = () => {
    const { peopleInfo, pageNumber } = this.state;

    const nextPage = parseInt(pageNumber) + 1;

    if (nextPage > peopleInfo.pages) return;

    //chama objeto que pega o dados dos registros por meio da API e armazena no state
    this.loadPeople(nextPage);
  };

  //metodo que busca o registro pelo ID
  findPerson = async () => {
    console.log("aqi");

    const { personName } = this.state;
    //requisição na api
    const response = await api.get(
      `/peopleLikeSearch?nome=${personName.toLowerCase()}`
    );
    console.log(response);

    if (personName !== "") {
      if (response.data === "" && response.status === 204) {
        //apresenta a notificação que nao encontrou resgistros se a requisição da api retornar que nao encontrou registros
        Notifications("info", "Nenhum registro encontrado.");
      } else {
        //se encontrar registros muda os dados do state
        const docs = response.data;
        const peopleInfo = { pages: 1, total: 1 };
        const pageNumber = "1";

        this.setState({ people: docs, peopleInfo, pageNumber });
      }
    } else {
      //chama objeto que pega o dados dos registros por meio da API e armazena no state
      this.loadPeople();
    }
  };

  inputEmpty = () => {
    const { personName } = this.state;

    if (personName == "") {
      //chama objeto que pega o dados dos registros por meio da API e armazena no state
      this.loadPeople();
    }
  };

  render() {
    const { people, pageNumber, peopleInfo, personName } = this.state;

    return (
      <div className="people">
        <div className="person">
          <form>
            <input
              name="personName"
              id="personName"
              type="text"
              value={personName}
              onChange={e => this.setState({ personName: e.target.value })}
              onKeyUp={
                this.inputEmpty /*A solta a tecla chamar o metodo inputEmpty*/
              }
              placeholder="Nome da pessoa"
            ></input>
            <button
              type="button"
              onClick={
                this.findPerson
              } /*Ao clina no botao chama o metodo que pesquisa resgistos do usuario  */
            >
              Pesquisar
            </button>
          </form>

          <Link
            to="/create/person" /*Ao clicar no botao redireciona para a pagina de novo cadastro */
          >
            <button>Novo</button>
          </Link>
        </div>
        <div className="people-list">
          {/*Percorre o array people do state e acada iteração renderiza o html ja com os outros dados armazenados no state */
          people.map(people => (
            <article key={people.id}>
              <strong>{people.nome}</strong>
              <p>{people.email}</p>
              <Link to={`/person/${people.id}`}>Acessar</Link>
            </article>
          ))}
        </div>
        <div className="actions">
          <button
            disabled={
              /*Desabilita o botao de pagina anterior se a pagina atual for a primeira*/
              parseInt(pageNumber) === 1
            }
            onClick={
              this.prevPage /*Chamar o metodo prevPage ao clicar no botao*/
            }
          >
            Anterior
          </button>
          <label>Page: {pageNumber}</label>
          <button
            disabled={
              /*Desabilita o botao de proxima pagina  se a pagina atual for a ultima */
              parseInt(pageNumber) === peopleInfo.pages ||
              peopleInfo.pages === 0
            }
            onClick={
              this.nextPage /*Chamar o metodo nextPage ao clicar no botao*/
            }
          >
            Proximo
          </button>
        </div>
        <ToastContainer /*Container de notificações*/ />
      </div>
    );
  }
}
