import axios from "axios";

const apiUrl = "http://bestinwoo.hopto.org:8080/";

const instance = axios.create({
  baseURL: apiUrl,
});

export const getComments = async (page, limit) => {
  const response = await instance.get(
    `/post?boardId=${page}&page=${limit}`
  );
  console.log(response.data.data.content)
  return response.data.data.content;
};