import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const loginAPI = async (username: string, password: string) => {
  await instance
    .post(
      "users/login/",
      { username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      },
    )
    .then((response) => response.data);
};
