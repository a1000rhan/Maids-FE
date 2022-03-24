import axios from "axios";

export const baseURL = "http://192.168.8.150:8000";
// export const baseURL = "http://localhost:8000";

const api = axios.create({ baseURL: `${baseURL}/api` });

export default api;
