import axios from 'axios';
const API_URL = "https://swassignment-php-api.000webhostapp.com";

export const getAll = () => {
    return axios.get(`${API_URL}/read.php`);
}

export const addProduct = product => {
    return axios.get(`${API_URL}/addNew.php`, {
        params: product
    });
}

export const massDelete = ids => {
    return axios.get(`${API_URL}/delete.php?id=${ids}`);
}