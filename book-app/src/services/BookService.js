import axios from "../core/AxiosService";
export const getDataSearch = async (name, page, size) => {
  return await axios.get(`/book/search?name=${name}&page=${page}&size=${size}`);
};
