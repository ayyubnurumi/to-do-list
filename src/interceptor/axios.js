import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8082/';

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401) {
        const data = JSON.parse(localStorage.getItem('userCredentials'))
        console.log(data);
        const response = await axios.post('refresh', {}, {Bearer: `TOKEN ${data.refreshToken}`});
        console.log(response);

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['accessToken']}`;

            return axios(error.config)
        }
    }

    return error
})