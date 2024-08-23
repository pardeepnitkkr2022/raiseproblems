import axios from 'axios';

const API = axios.create({ baseURL: 'https://raiseproblem.onrender.com/api' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('authToken')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
    }
    return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);

export const createProblem = (formData) => API.post('/problems', formData);
export const getProblems = () => API.get('/problems');
export const getProblem = (id) => API.get(`/problems/${id}`);
export const addComment = (id, comment) => API.post(`/problems/${id}/comments`, comment);
export const voteProblem = (id, type) => API.post(`/problems/${id}/vote`, { type });
export const deleteProblem = (id) => API.delete(`/problems/${id}`);

