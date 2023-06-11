import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth.herokuapp.com/api",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    console.log(`config :`, config.headers.Authorization);
  }
  return config;
});

export default instance;
