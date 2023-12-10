import { useNavigate, useParams } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useQuery } from "react-query";
import { deletPostAPI, getPostDetailAPI } from "../api";
import { IPost, IUser } from "../types";

//<div className="px-4 py-2 rounded-full bg-gray-400">{item}</div>

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery<IPost>(
    ["post", params.id],
    () => getPostDetailAPI(params.id as string),
  );
  const { data: user } = useQuery<IUser>(["me"]);
  const onClickDeleteBtn = async () => {
    await deletPostAPI(params.id as string);
    navigate("/");
  };
  const onClickEditBtn = () => {
    navigate(`/post/${params.id}/edit`);
  };
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

          <div className="mt-6 flex flex-wrap gap-3">
            {data!.categories.split(",").map((item) => (
              <div key={item} className="px-4 py-2 rounded-full bg-gray-400">
                {item}
              </div>
            ))}
          </div>
          <div className="bg-gray-700 h-1.5 w-full rounded-full my-8"></div>
          <MarkdownPreview className="w-full" source={data!.description} />
          {user?.username === data?.creator.username && (
            <div className="w-full py-14 flex justify-end items-center space-x-4">
              <button
                onClick={onClickEditBtn}
                className="px-4 py-2 rounded-md bg-white text-black font-semibold"
              >
                Edit
              </button>
              <button
                onClick={onClickDeleteBtn}
                className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Detail;
