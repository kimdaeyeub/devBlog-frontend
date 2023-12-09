import React from "react";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { getAllMyPostAPI } from "../api";
import { IPost } from "../types";

const Home = () => {
  const { isLoading, isError, data } = useQuery("posts", getAllMyPostAPI);
  console.log(data);
  return (
    <div className="w-full h-full min-h-screen px-64 py-12 flex flex-col justify-start items-center space-y-5">
      {!isLoading &&
        !isError &&
        data.map((post: IPost) => <Card key={post.id} {...post} />)}
    </div>
  );
};

export default Home;
