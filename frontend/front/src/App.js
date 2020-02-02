import React, { useState, useEffect } from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
import api from "./services/api";
import PersonItem from "./components/PersonItem";
import PersonForm from "./components/PersonForm";

function App() {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({});
  useEffect(() => {
    async function loadPeople() {
      const response = await api.get("/people");
      setPeople(response.data);
    }
    loadPeople();
  }, []);

  async function handleAddPerson(data) {
    const response = await api.post("/people", data);
    setPeople([...people, response.data]);
  }
  async function handleUpdatePerson(id, data) {
    await api.put(`/people/${id}`, data);
  }
  function updatePerson(data) {
    setPerson({ ...data });
  }
  return (
    <div id="app">
      <div className="form">
        <aside>
          <strong>Cadastrar Pessoa</strong>
          <PersonForm onSubmit={handleAddPerson} />
        </aside>
      </div>
      <main>
        <ul>
          {people.map(person => (
            <PersonItem
              key={person.id}
              person={person}
              people={people}
              setPeople={setPeople}
              updatePerson={updatePerson}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
