import axios from 'axios';

//const API_URL = "http://productsphpapi.onlinewebshop.net/"
const API_URL = "https://swassignment-php-api.000webhostapp.com/";

export const getAll = () => {
    return axios.get(`${API_URL}/read.php`);
}

export const addProduct = product => {
    fetch(`${API_URL}/addNew.php`, {
        method: 'POST',
        body: JSON.stringify({ product })
    })
    .then(res => res.json())
    // return axios.post(`${API_URL}/addNew.php`, product);
}

export const massDelete = ids => {
    return axios.get(`${API_URL}/delete.php?id=${ids}`);
}
