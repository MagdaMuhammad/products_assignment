import axios from 'axios';

const API_URL = "http://productsphpapi.onlinewebshop.net/"

export const getAll = () => {
    return axios.get(`${API_URL}/read.php`);
}

export const addProduct = product => {
    return axios.post(`${API_URL}/add.php`, product);
}

export const massDelete = ids => {
    return axios.get(`${API_URL}/delete.php?id=${ids}`);
}
