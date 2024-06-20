import axios from "axios";
import { api } from "./environment";

const instance = axios.create({
    baseURL: api.url,
    timeout: 1000,
});

export default instance;
