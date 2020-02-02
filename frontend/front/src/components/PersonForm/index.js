import React, { useState } from "react";
import "./style.css";

function PersonForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      name,
      gender,
      age
    });
    setName("");
    setGender("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_block">
        <label htmlFor="name_person">Nome</label>
        <input
          name="name_person"
          id="name_person"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="input_block">
        <label htmlFor="gender_person">Gênero</label>
        <input
          name="gender_person"
          id="gender_person"
          required
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
      </div>

      <div className="input_block">
        <label htmlFor="age_person">Idade</label>
        <input
          name="age_person"
          id="age_person"
          required
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default PersonForm;
