import { useNavigate } from "react-router-dom";
import { IPost } from "../types";

//TODO:hello
const Card = (post: IPost) => {
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="w-full h-full min-h-[250px] flex flex-col justify-between items-start border-b border-gray-700 text-white py-8">
      <div className="w-full h-full">
        <div className="w-full flex justify-between items-center">
          <span className="text-4xl font-medium">{post.title}</span>
          <svg
            onClick={() => onClick(post.id)}
            className="text-white cursor-pointer w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            ></path>
          </svg>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {post.categories.split(",").map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-full bg-gray-400 text-black"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-start items-center space-x-4 text-gray-400">
        <span>{post.created_at.slice(0, 10)}</span>
        {/* <span>0개의 댓글</span>
        <div className="flex justify-center items-center space-x-1">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
          </svg>
          <span>0</span>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
