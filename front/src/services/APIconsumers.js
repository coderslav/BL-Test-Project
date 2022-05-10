import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

export const getRealties = async () => {
    return await axios
        .get('realties/')
        .then((res) => res)
        .catch((e) => e);
};

export const createRealty = async (newRealty) => {
    return await axios
        .post('realties/create/', newRealty)
        .then((res) => res)
        .catch((e) => e);
};

export const updateRealty = async (updatedRealty, id) => {
    return await axios
        .patch(`realties/update/${id}/`, updatedRealty)
        .then((res) => res)
        .catch((e) => e);
};

export const deleteRealty = async (id) => {
    return await axios
        .delete(`realties/delete/${id}/`)
        .then((res) => res)
        .catch((e) => e);
};
