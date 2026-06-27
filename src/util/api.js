import axios from "axios";

// https://smit-sms-backend.onrender.com
const environment = import.meta.env.REACT_APP_ENV
const api = axios.create({ baseURL: environment === "prod" ? "https://smit-sms-backend.onrender.com" : "http://localhost:8000"});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
        config.headers.set("Authorization", `Bearer ${token}`);
    }

    return config;
});

export default api;