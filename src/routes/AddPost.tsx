import React, { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

const AddPost = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    console.log(title, markdown);
  };
  return (
    <div className="w-full h-screen px-10">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-end bg-[#131a22] py-10 px-10">
          <div className="w-full flex justify-center items-center space-x-3">
            <span className="text-3xl text-gray-300 text-center">title:</span>
            <input
              placeholder="Title"
              value={title}
              onChange={onChangeTitle}
              className="w-full py-4 font-semibold bg-[#131a22] outline-none text-gray-200 text-3xl"
            />
          </div>
          <textarea
            onChange={onChange}
            value={markdown}
            className="text-gray-200 text-lg w-full bg-[#131a22] h-full outline-none py-8 resize-none overflow-y-auto"
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
        <div className="w-1/2 h-full border-2 border-gray-700 p-3 overflow-y-auto">
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
