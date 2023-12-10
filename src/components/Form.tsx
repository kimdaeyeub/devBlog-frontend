import MarkdownPreview from "@uiw/react-markdown-preview";

interface IProp {
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  markdown: string;
  tags: string;
  onChangeTags: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Form = ({
  title,
  onChangeTitle,
  onChange,
  markdown,
  tags,
  onChangeTags,
  onSubmit,
}: IProp) => {
  return (
    <div className="w-full h-full grid md:grid-cols-2 bg-[#0E1117]">
      <div
        className="w-full h-full flex flex-col justify-between items-end bg-[#131a22] py-10 px-10 box
          "
      >
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
        <input
          value={tags}
          onChange={onChangeTags}
          placeholder="Add tags.."
          className="w-full px-3 py-2 bg-[#2c3e50] rounded-lg outline-none text-gray-400 mt-3"
        />
        <button
          onClick={onSubmit}
          className="px-4 py-2 rounded-lg bg-slate-700 text-gray-400 mt-12"
        >
          등록하기
        </button>
      </div>
      {/* 마크다운 미리보기 */}
      <div className="w-full h-full p-3 hidden md:flex">
        <MarkdownPreview
          className=" text-gray-500 break-words min-h-screen"
          source={markdown}
        />
      </div>
    </div>
  );
};

export default Form;
