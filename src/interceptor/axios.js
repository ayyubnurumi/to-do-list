import axios from "axios";

axios.defaults.baseURL = "http://localhost:8082/";

const instance = axios.create({
  // baseURL: "http://localhost:8082/",
  headers: {
    "Content-Type": "application/json",
  },
});

let refresh = false;

instance.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      const token = JSON.parse(localStorage.getItem("userCredentials"));
      console.log(token);
      const response = await axios.post(
        "refresh",
        {},
        { headers: {refreshToken: token.refreshToken} }
      );
      console.log(response);

      if (response.status === 200) {
        axios.defaults.headers.common = {'Authorization': `Bearer ${response.data.accesToken}`};
        // instance.interceptors.request.use(
        //   (config) => {
        //     if (token) {
        //       config.headers["Authorization"] = `Bearer ${response.data.accesToken}`;  // for Spring Boot back-end
        //       // config.headers["x-access-token"] = response.data.accesToken; // for Node.js Express back-end
        //     }
        //     return config;
        //   },
        //   (error) => {
        //     return Promise.reject(error);
        //   }
        // );
      }
    }

    if (error.response.status === 403 && error.response.data) {
      return Promise.reject(error.response.data);
    }

    refresh = false;
    return error;
  }
);
