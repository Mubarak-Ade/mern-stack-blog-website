import axios from "axios";

const API = axios.create({
    baseURL: "https://mern-stack-blog-website-xik0.onrender.com",
});

export const setupInterceptors = (getState) => {
    API.interceptors.request.use((config) => {
        const token = getState().token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });
};

export default API;
