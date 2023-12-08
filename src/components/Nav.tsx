import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProp {
  onClickLogin: () => void;
}

const Nav = ({ onClickLogin }: IProp) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <div className="w-full px-20 py-8 bg-gray-800 flex justify-between items-center text-white">
      {/* 데스크탑 네비게이션 */}
      <h1 className="text-3xl font-bold" onClick={onClickLogo}>
        Logo
      </h1>

      <div className="flex justify-center items-center space-x-12">
        {/* 항목 */}
        <div className="md:flex hidden justify-center items-center space-x-3">
          <span className="text-lg font-medium cursor-pointer">새 글 추가</span>
        </div>
        {/* 로그인버튼 or 아바타 이미지 */}
        {isLoggedIn ? (
          <div className="flex justify-center items-center space-x-4">
            <button className="md:flex hidden px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-semibold">
              로그아웃
            </button>
            <div className="w-14 h-14 rounded-full bg-gray-300" />
          </div>
        ) : (
          <button
            onClick={onClickLogin}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 font-semibold"
          >
            로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
