import axios from 'axios';

export const getPostings = () => {
    return axios.get('/api/postings')
};

export const getUserPostings = id => {
    return axios.get(`/api/postings/user/${id}`)
};

export const writePosting = data => {
    return axios.post('/api/postings/', data)
};