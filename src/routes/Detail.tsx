import { useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useQuery } from "react-query";
import { getPostDetailAPI } from "../api";
import { IPost } from "../types";

const Detail = () => {
  const params = useParams();
  const { isLoading, isError, data } = useQuery<IPost>(
    ["post", params.id],
    () => getPostDetailAPI(params.id as string)
  );
  return (
    <>
      {!isLoading && !isError && (
        <div className="w-full min-h-screen xl:px-52 lg:px-44 md:px-32 sm:px-20 px-10 py-14 flex flex-col justify-start items-start">
          <div className="w-full h-full flex justify-between items-center">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extrabold text-white">
              {data!.title}
            </h1>
            <span className="text-gray-500 xl:text-2xl md:text-xl text-lg font-semibold">
              {data!.created_at.slice(0, 10)}
            </span>
          </div>
          <div className="bg-gray-700 h-1.5 w-full rounded-full my-8"></div>
          <MarkdownPreview className=" w-full" source={data!.description} />
        </div>
      )}
    </>
  );
};

export default Detail;
