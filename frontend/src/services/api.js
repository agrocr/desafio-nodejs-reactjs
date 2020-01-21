//usa a bliblioteca axios para executar as requisições na api
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/api" });

export default api;
