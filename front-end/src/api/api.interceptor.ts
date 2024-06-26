import axios from 'axios';
import { errorCatch, getContentType } from './api.helper';

export const instance = axios.create({
    baseURL: process.env.API_URL,
    headers: getContentType(),
})

instance.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config;
        
        if (
            (error.response.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                // Get new token
                return instance.request(originalRequest)
            } catch (error) {
                // if (errorCatch(error) === 'jwt expired')
                // Delete tokens
            }
        }
    }
)