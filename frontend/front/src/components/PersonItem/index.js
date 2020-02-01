import React from "react";
import "./style.css";
import api from "../../services/api";

function PersonItem(props) {
  const { person, people, setPeople, updatePerson } = props;

  async function handleDeletePerson(id) {
    await api.delete(`/people/${id}`);
    let peopleUpdated = people.filter(p => {
      return p.id !== person.id;
    });

    setPeople([...peopleUpdated]);
  }

  function changeRender(data) {
    updatePerson(data);
  }

  return (
    <li className="person_item">
      <header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
          alt=""
        />
      </header>
      <div className="person_info">
        <strong className="person_name">Nome: {person.name}</strong>
        <strong className="person_gender">Gênero: {person.gender}</strong>
        <strong className="person_gender">Idade: {person.age} anos</strong>
      </div>
      <div className="actions">
        <button className="btn_upt" onClick={() => changeRender(person)}>
          Editar
        </button>
        <button
          className="btn_dtr"
          onClick={() => handleDeletePerson(person.id)}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}

export default PersonItem;
