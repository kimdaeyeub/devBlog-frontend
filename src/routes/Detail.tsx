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
        <div className="w-full min-h-screen px-60 py-14 flex flex-col justify-start items-start">
          <div className="w-full h-full flex justify-between items-center">
            <h1 className="text-7xl font-extrabold text-white">
              {data!.title}
            </h1>
            <span className="text-gray-500 text-2xl font-semibold">
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
