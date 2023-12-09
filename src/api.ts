import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const loginAPI = async (username: string, password: string) =>
  instance
    .post(
      "users/login/",
      { username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export const getMeAPI = async () =>
  instance.get("users/me/").then((response) => response.data);

export const logoutAPI = async () =>
  instance
    .post("users/logout/", null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const signUpAPI = async ({
  username,
  password,
  name,
}: {
  username: string;
  password: string;
  name: string;
}) =>
  instance
    .post(
      "users/signup/",
      { username, password, name },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

interface IPost {
  title: string;
  description: string;
}

export const addPostAPI = async (post: IPost) =>
  instance
    .post("posts/add/", post, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const getAllMyPostAPI = async () =>
  instance.get("posts/").then((response) => response.data);

export const getPostDetailAPI = async (id: string) =>
  instance.get(`posts/${id}`).then((response) => response.data);
