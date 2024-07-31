import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const createComponent = (component) => axios.post(`${API_URL}/components/`, component);

export const createVehicle = (vehicle) => axios.post(`${API_URL}/vehicles/`, vehicle);

export const createIssue = (issue) => axios.post(`${API_URL}/issues/`, issue);

export const getVehicles = () => axios.get(`${API_URL}/vehicles/`);

export const getComponents = () => axios.get(`${API_URL}/components/`);

export const getRevenueData = () => axios.get(`${API_URL}/revenue/`);
