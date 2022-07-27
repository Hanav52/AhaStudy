import axios from "axios";

const apiUrl = "http://bestinwoo.hopto.org:8080/";

const instance = axios.create({
  baseURL: apiUrl,
});

export const getComments = async (userId, page, limit) => {
  const response = await instance.get(
    `/user/post/${userId}?page=${page}&limit=${limit}`
  )
  window.localStorage.setItem("totalElements", response.data.data.totalElements);
  return response.data.data.content;
};




