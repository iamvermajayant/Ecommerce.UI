import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBmNzEyZTQyNGJlNmFkODhjYmY3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzI2NDA5NCwiZXhwIjoxNzIzNTIzMjk0fQ.QQW2niCZluAzhH1uMQRfOuPVtcZ7aRPyZW4rHrw6zI0'


export const publicRequest = axios.create({
    baseURL : BASE_URL,
}) 

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token : `Bearer ${TOKEN}`}
})

