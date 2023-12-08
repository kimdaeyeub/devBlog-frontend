import React, { useState } from "react";
import { loginAPI, signUpAPI } from "../api";
import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { loginModalState } from "../atom";

interface IProp {
  signUp: boolean;
}

const LoginModal = ({ signUp }: IProp) => {
  const [loginModal, setLoginModal] = useRecoilState(loginModalState);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const queryClient = useQueryClient();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "passwordConfirm") {
      setPasswordConfirm(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signUp) {
      await loginAPI(username, password);
      queryClient.refetchQueries(["me"]);
      setLoginModal(false);
    } else {
      if (password !== passwordConfirm) {
        setError("비밀번호가 일치하지 않습니다.");
      } else {
        await signUpAPI({ username, password, name });
        setLoginModal(false);
      }
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-full flex flex-col justify-center items-center"
    >
      {signUp && (
        <>
          <input
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg mb-2 outline-none"
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </>
      )}
      <input
        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg mb-2 outline-none"
        placeholder="Username"
        type="text"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg mb-2 outline-none"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      {signUp && (
        <>
          <input
            className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg mb-2 outline-none"
            placeholder="Password Confirm"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChange}
          />
        </>
      )}
      {error !== "" && (
        <span className="mt-4 font-medium text-lg text-red-400">{error}</span>
      )}
      <div className="w-full bg-gray-200 h-1.5 rounded-full my-4" />
      <input
        className="rounded-md w-full py-3 bg-black border-2 border-black text-white text-lg font-medium"
        type="submit"
        value="Login"
      />
    </form>
  );
};

export default LoginModal;