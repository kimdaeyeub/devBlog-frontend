import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { editProfileAPI } from "../api";
import { IUser } from "../types";

const EditProfile = () => {
  const { isLoading, isError, data } = useQuery<IUser>(["me"]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation(editProfileAPI, {
    onSuccess: () => {
      navigate("/my-profile");
    },
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "avatar") {
      setAvatar(e.target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = { name, email, username, avatar };
    mutation.mutate(code);
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      setName(data!.name);
      setEmail(data!.email);
      setUsername(data!.username);
      setAvatar(data!.avatar);
    }
  }, [data]);
  return (
    <div className="w-full min-h-screen text-white flex justify-center items-center xl:px-52 lg:px-44 md:px-32 sm:px-20 px-5 py-8">
      <form
        onSubmit={onSubmit}
        className="w-full border border-gray-400 md:px-10 px-3 md:py-8 py-3 rounded-lg flex flex-col space-y-3 justify-center items-end"
      >
        <h1 className="w-full text-start text-7xl font-bold my-5">
          Edit your profile
        </h1>
        <label className="w-full">
          <span className="text-2xl font-semibold text-gray-400">Name</span>
          <input
            placeholder="Name"
            onChange={onChange}
            name="name"
            value={name}
            type="text"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-800 mt-2"
          />
        </label>
        <label className="w-full">
          <span className="text-2xl font-semibold text-gray-400">Email</span>
          <input
            onChange={onChange}
            placeholder="Email"
            value={email}
            type="email"
            name="email"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-800 mt-2"
          />
        </label>
        <label className="w-full">
          <span className="text-2xl font-semibold text-gray-400">Username</span>
          <input
            onChange={onChange}
            placeholder="Username"
            value={username}
            name="username"
            type="text"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-800 mt-2"
          />
        </label>
        <label className="w-full">
          <span className="text-2xl font-semibold text-gray-400">
            Avatar URL
          </span>
          <input
            onChange={onChange}
            placeholder="Avatar"
            value={avatar}
            type="text"
            name="avatar"
            className="w-full px-3 py-2 rounded-md outline-none bg-gray-800 mt-2"
          />
        </label>
        <input
          value="변경하기"
          type="submit"
          className="px-3 py-2 rounded-md outline-none bg-gray-300 text-gray-800"
        />
      </form>
    </div>
  );
};

export default EditProfile;
