import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMeAPI, logoutAPI } from "../api";

interface IProp {
  onClickLogin: () => void;
  onClickSignUp: () => void;
}

const Nav = ({ onClickLogin, onClickSignUp }: IProp) => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery(["me"], getMeAPI, {
    retry: false,
  });

  const onClickLogo = () => {
    navigate("/");
    setToggleDropDown(false);
  };

  const onClickLogout = async () => {
    await logoutAPI();
    queryClient.refetchQueries(["me"]);
    setToggleDropDown(false);
  };

  const onClickAddPost = () => {
    navigate("/post/add");
    setToggleDropDown(false);
  };

  const onClickAvatar = (type: string) => {
    if (type === "mobile") {
      //dropdown 메뉴를 연다.
      setToggleDropDown(!toggleDropDown);
    } else {
      //profile 페이지로 이동한다.
      navigate("/my-profile");
      setToggleDropDown(false);
    }
  };

  return (
    <div className="w-full xl:px-52 lg:px-44 md:px-32 sm:px-20 px-10 py-8 bg-[#0d1117] flex justify-between items-center text-white border-b border-gray-700">
      {/* 데스크탑 네비게이션 */}
      <h1 className="text-5xl font-bold cursor-pointer" onClick={onClickLogo}>
        DevBlog
      </h1>

      <div className="flex justify-center items-center space-x-12">
        {/* 항목 */}
        {/* TODO: 나중에 !isError && !isLoading 으로 다시 수정해야함*/}
        {!isError && !isLoading ? (
          <div className="flex justify-center items-center space-x-4 relative">
            <span
              onClick={onClickAddPost}
              className="text-lg font-medium cursor-pointer mr-8 md:flex hidden"
            >
              새 글 추가
            </span>
            <button
              onClick={onClickLogout}
              className="md:flex hidden px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-semibold"
            >
              로그아웃
            </button>
            {/* 아바타 이미지 */}
            <div
              onClick={() => onClickAvatar("mobile")}
              className="md:hidden flex w-14 h-14 rounded-full bg-gray-300"
            />
            <div
              onClick={() => onClickAvatar("desktop")}
              className="md:flex  hidden w-14 h-14 rounded-full bg-gray-300"
            />
            {/*dropdown 메뉴*/}
            {toggleDropDown && (
              <div className="md:hidden absolute bg-white top-full right-0 min-w-[220px] min-h-[130px] rounded-lg mt-3 text-black flex flex-col justify-center items-center px-4 py-2">
                <button
                  onClick={() => onClickAvatar("desktop")}
                  className="border-b border-gray-300 w-full py-3 h-full"
                >
                  나의 프로필
                </button>
                <button
                  onClick={onClickAddPost}
                  className="border-b border-gray-300 w-full py-3 h-full text-center"
                >
                  새 글 추가
                </button>
                <button
                  onClick={onClickLogout}
                  className="border-b border-gray-300 w-full py-3 h-full"
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={onClickLogin}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-semibold"
            >
              로그인
            </button>
            <button
              onClick={onClickSignUp}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-semibold"
            >
              회원가입
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
