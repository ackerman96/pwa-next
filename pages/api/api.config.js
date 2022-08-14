import env from '../env/env.config';
export const URL = env.URL;
export const endpoints = {
    REGISTER: '/auth/local/register',
    LOGIN: '/auth/local',
    ARTICLE: '/articles',
    ARTICLE_BY_ID: '/articles/:id',
    

}