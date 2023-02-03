
import http from "./http";

const login = () => {
  return http.post("users/login");
};

const register = () => {
  return http.post("users/register");
};

const authService = {
  login,
  register,
};

export default authService;
