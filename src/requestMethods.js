
import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}`
let TOKEN = localStorage.getItem("persist:root")?JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.data.token:"";
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers :{Authorization: `Bearer ${TOKEN}`}
})