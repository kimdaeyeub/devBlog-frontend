import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { addPostAPI } from "../api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const AddPost = () => {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const mutation = useMutation(addPostAPI, {
    onSuccess: () => {
      setMarkdown("");
      setTitle("");
      navigate("/");
    },
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = async () => {
    mutation.mutate({ title, description: markdown });
  };
  return (
    <div className="w-full bg-[#0E1117]">
      <div className="w-full h-full grid grid-cols-2">
        <div className="w-full h-full flex flex-col justify-between items-end bg-[#131a22] py-10 px-10">
          <div className="w-full flex justify-center items-center space-x-3">
            <span className="text-3xl text-gray-300 text-center">title:</span>
            <input
              placeholder="Title"
              value={title}
              onChange={onChangeTitle}
              className="w-full py-4 font-semibold bg-[#131a22] outline-none text-gray-200 text-3xl pr-6 text-ellipsis"
            />
          </div>
          <textarea
            onChange={onChange}
            value={markdown}
            className="text-gray-200 text-lg w-full bg-[#131a22] min-h-screen h-full outline-none py-8 resize-none overflow-y-auto pr-4"
            placeholder="Add your post.."
          />
          <button
            onClick={onSubmit}
            className="px-4 py-2 rounded-lg bg-slate-700 text-gray-400 mt-3"
          >
            등록하기
          </button>
        </div>
        {/* 마크다운 미리보기 */}
        <div className="w-full h-full p-3">
          <MarkdownPreview
            className=" text-gray-500 break-words "
            source={markdown}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
