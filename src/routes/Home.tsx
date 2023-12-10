import React from "react";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { IPost } from "../types";
import { getAllPostAPI } from "../api";

const Home = () => {
  const { isLoading, isError, data } = useQuery("posts", getAllPostAPI, {
    retry: false,
  });
  return (
    <div className="w-full h-full min-h-screen xl:px-52 lg:px-44 md:px-32 sm:px-20 px-10 py-12 flex flex-col justify-start items-center space-y-5">
      {!isLoading &&
        !isError &&
        data.map((post: IPost) => <Card key={post.id} {...post} />)}
    </div>
  );
};

export default Home;
