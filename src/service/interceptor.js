import http from "./http";
 
let refresh = false;

http.interceptors.response.use(
    (resp) => resp,
    async (error) => {
      if (error.response.status === 401 && !refresh) {
        refresh = true;
        const token = JSON.parse(localStorage.getItem("user"));
        // console.log(token.refreshToken);
        const response = await http.post(
          `refresh`,
          {},
          { headers: {"Authorization": "Bearer " + token.refreshToken.replace(/^["'](.+(?=["']$))["']$/, '$1')} }
        );
        // console.log(response);
  
        if (response.status === 200) {
          const access = response.data.accessToken.replace(/^["'](.+(?=["']$))["']$/, '$1');
          // console.log(access);
          http.defaults.headers.common["Authorization"]= `Bearer ${access}`;
        }
      }
  
      if (error.response.status === 403 && error.response.data) {
        return Promise.reject(error.response.data);
      }
  
      refresh = false;
      return error;
    }
  );