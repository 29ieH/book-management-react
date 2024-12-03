import axios from "../core/AxiosService";
export const getCommentsByBook = async (id) => {
  console.log("Id search Books:: ", id);
  return await axios.get(`/comment/book/${id}`);
};
export const addComment = async (body) => {
  return await axios.post(`/comment/add`, body);
};
