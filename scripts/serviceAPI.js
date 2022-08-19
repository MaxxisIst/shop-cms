import {API_URI} from './const.js';

export const getGoods = async (id) => {
    // return fetch(`${API_URI}goods/?nopage=true`).then(response => response.json());
    const response = await fetch(`${API_URI}api/goods/${id ? id : '?nopage=true'}`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error (response.status);
};

export const postGoods = async (data) => {
    // return fetch(`${API_URI}goods/?nopage=true`).then(response => response.json());
    const response = await fetch(`${API_URI}api/goods`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error (response.status);
};

export const editGoods = async (data) => {
    // return fetch(`${API_URI}goods/?nopage=true`).then(response => response.json());
    const response = await fetch(`${API_URI}api/goods/${data.identificator}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        return await response.json();
    }
    throw new Error (response.status);
};

export const getCategory = async () => {
    // return fetch(`${API_URI}category`).then(response => response.json());
    const response = await fetch(`${API_URI}api/category`);
    if (response.ok) {
        return await response.json();
    }
    throw new Error (response.status);
};

export const deleteGoods = async (id) => {
    const response = await fetch(`${API_URI}api/goods/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
    });

    if (response.ok) {
        return response.json();
    }
    throw new Error (response.status);
};