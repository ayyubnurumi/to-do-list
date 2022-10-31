import axios from "axios";

axios.defaults.baseURL = 'http://192.168.1.34:8082/';

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401){
        const response = await axios.post('refresh', {});
        console.log(response)
        
        if (response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['accessToken']}`;
            return axios(error.config);
        }
    }
    return error;
})