import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const AxiosConfig = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export { AxiosConfig, BASE_URL };
