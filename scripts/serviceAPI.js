import {API_URI} from './const.js';

export const getGoods = async () => {
    // return fetch(`${API_URI}goods/?nopage=true`).then(response => response.json());
    const response = await fetch(`${API_URI}goods/?nopage=true`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error (response.status);
};

export const getCategory = async () => {
    // return fetch(`${API_URI}category`).then(response => response.json());
    const response = await fetch(`${API_URI}category`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error (response.status);
};