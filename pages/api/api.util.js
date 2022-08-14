import {request} from './http.util';
import {endpoints, URL} from './api.config.js'
const register = (payload) => request(URL, 'POST', payload, endpoints.REGISTER);
const login = (payload) => request(URL, 'POST', payload, endpoints.LOGIN);
const article = (payload) => request(URL, 'POST', payload, endpoints.ARTICLE);
const articleById = (id) => request(URL, 'GET', null, endpoints.ARTICLE_BY_ID.replace(':id', id));
const deleteArticleById = (id) => request(URL, 'DELETE', null, endpoints.ARTICLE_BY_ID.replace(':id', id));
const updateArticleById = (id, payload) => request(URL, 'PUT', payload, endpoints.ARTICLE_BY_ID.replace(':id', id));
const createArticle = (payload) => request(URL, 'POST', payload, endpoints.ARTICLE);
module.exports = { 
    register,
    login,
    article,
    articleById,
    deleteArticleById,
    updateArticleById,
    createArticle
    
}