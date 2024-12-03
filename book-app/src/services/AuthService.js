import axios from "../core/AxiosService";
export const login = async (data) => {
  return await axios.post("/authen/login", data);
};
