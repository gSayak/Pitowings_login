import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:5000"
});

export const endpoints = {
    login : "/login",
    signup : "/signup",
    verify : "/verify"
}