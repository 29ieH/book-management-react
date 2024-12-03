import axios from "../core/AxiosService";
export const getBooksByUrl = async (key) => {
  console.log({ key });
  return await axios.get(`/book${key}`);
};
export const getBookById = async (id) => {
  return await axios.get(`/book/detail/${id}`);
};
