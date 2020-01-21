/*importa os componentes */
import React from "react";
import Routes from "./routes";
import "./styles.css";

import Header from "./components/Header";

const App = () => (
  <div className="App">
    <Header /*chama o componente header*//> 
    <Routes /*chama o componente routes*//>
  </div>
);

export default App;
