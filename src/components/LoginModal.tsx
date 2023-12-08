import React, { useState } from "react";
import { loginAPI } from "../api";

const LoginModal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginAPI(username, password);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-full flex flex-col justify-center items-center"
    >
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
      <div className="w-full bg-gray-200 h-1.5 rounded-full my-4" />
      <div className="w-full flex justify-center items-center space-x-2">
        <input
          className="rounded-md w-full py-3 bg-black border-2 border-black text-white text-lg font-medium"
          type="submit"
          value="Login"
        />
        <button className="rounded-md w-full py-3 border-2 border-black text-lg font-medium">
          SignUp
        </button>
      </div>
    </form>
  );
};

export default LoginModal;
