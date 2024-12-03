import axios from "../core/AxiosService";
export const getBookPopular = async () => {
  return await axios.get("/book");
};
