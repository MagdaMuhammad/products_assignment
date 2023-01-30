import axios from 'axios';
const API_URL = "https://swassignment-php-api.000webhostapp.com";

// //const API_URL = "http://productsphpapi.onlinewebshop.net/"
// //const API_URL = "https://products-phpapi.epizy.com";

export const getAll = () => {
    return axios.get(`${API_URL}/read.php`);
}

export const addProduct = product => {
    //return axios.post(`${API_URL}/addNew.php`, JSON.stringify(product));
    return axios.get(`${API_URL}/addNew.php`, {
        params: product
    });
}

export const massDelete = ids => {
    return axios.get(`${API_URL}/delete.php?id=${ids}`);
}

// export const addProduct = product =>{
    
//     // let options = {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/json;charset=utf-8'
//     //     },
//     //     body: JSON.stringify(product)
//     // }
//     // Fake api for making post requests
//     let fetchRes = fetch(`${API_URL}/addNew.php?${product}`);
//     return fetchRes.json();
//     //fetchRes.then(res => res.json()).then(d => { console.log(d) })
// }
