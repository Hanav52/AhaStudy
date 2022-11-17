import axios from "axios";

const apiUrl1 = "http://43.201.127.127:8080";

export const instance1 = axios.create({
  baseURL: apiUrl1,
});

export const getComments = async (category, page, limit, Desc) => {
  const response = await instance1.get(
    `/post?boardId=${category}&page=${page}&size=${limit}&sort=${Desc}`
  )
  window.localStorage.setItem("totalElements", response.data.data.totalElements);
  return response.data.data.content;
};




