import axios from "axios";

const apiUrl = "http://bestinwoo.hopto.org:8080/";

const instance = axios.create({
  baseURL: apiUrl,
});

export const getComments = async (category, page, limit, Desc) => {
  const response = await instance.get(
    `/post?boardId=${category}&page=${page}&size=${limit}&sort=${Desc}`
  )
  window.localStorage.setItem("totalElements", response.data.data.totalElements);
  return response.data.data.content;
};




