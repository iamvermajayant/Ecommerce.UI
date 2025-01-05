import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBmNzEyZTQyNGJlNmFkODhjYmY3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjA3MTAzMSwiZXhwIjoxNzM2MTU3NDMxfQ.IyEZOI6IFGxj5psHZOsk8XRmyoy073_09KwslStiL0I'


export const publicRequest = axios.create({
    baseURL : BASE_URL,
}) 

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers : {token : `Bearer ${TOKEN}`}
})

