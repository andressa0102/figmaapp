import axios from "axios";

export const  api = axios.create({
    baseURL: "https://adonis-gaji.onrender.com",
    headers: {
        Accept: 'application/json'
    }
})