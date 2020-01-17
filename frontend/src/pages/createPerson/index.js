import React, { Component } from "react";

import "./styles.css";

export default class CreatePerson extends Component {
  render() {
    return (
      <div id="app">
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="nome">Nome:</label>
            <input name="nome" id="nome" required/>
          </div>

          <div className="input-block">
            <label htmlFor="cpf">CPF:</label>
            <input name="cpf" id="cpf" required/>
          </div>

          <div className="input-block">
            <label htmlFor="idade">Idade:</label>
            <input name="idade" id="idade" required/>
          </div>

          <div className="input-block">
            <label htmlFor="sexo">Sexo:</label>
            <input name="sexo" id="sexo" required/>
          </div>

          <div className="input-block">
            <label htmlFor="telefone">Telefone:</label>
            <input name="telefone" id="telefone" required/>
          </div>

          <div className="input-block">
            <label htmlFor="email">Email:</label>
            <input name="email" id="email" required/>
          </div>

          <div className="input-block">
            <label htmlFor="nome">Status:</label>
            <select name="ativo" id="ativo">
              <option value="true" selected>ATIVO</option>
              <option value="false">INATIVO</option>
            </select>
          </div>
          <div className="button-group">            
            <button type="button">Voltar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    )
  }
}
