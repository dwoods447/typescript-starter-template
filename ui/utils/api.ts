import axios from 'axios'
import defaultConfig from '../config/default'
const AxiosInstance = axios.create({
    baseURL: defaultConfig.BASE_URL || 'http://localhost:3000',
    headers: {
        "Content-type": "application/json"
    }
});

export default AxiosInstance;