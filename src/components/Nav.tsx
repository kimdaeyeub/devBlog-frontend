import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMeAPI, logoutAPI } from "../api";

interface IProp {
  onClickLogin: () => void;
  onClickSignUp: () => void;
}

const Nav = ({ onClickLogin, onClickSignUp }: IProp) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery(["me"], getMeAPI, {
    retry: false,
  });

  const onClickLogo = () => {
    navigate("/");
  };

  const onClickLogout = async () => {
    await logoutAPI();
    queryClient.refetchQueries(["me"]);
  };

  return (
    <div className="w-full px-20 py-8 bg-gray-800 flex justify-between items-center text-white">
      {/* 데스크탑 네비게이션 */}
      <h1 className="text-5xl font-bold" onClick={onClickLogo}>
        DevBlog
      </h1>

      <div className="flex justify-center items-center space-x-12">
        {/* 항목 */}
        {/* 로그인버튼 or 아바타 이미지 */}
        {!isError && !isLoading ? (
          <div className="flex justify-center items-center space-x-4">
            <span className="text-lg font-medium cursor-pointer mr-8">
              새 글 추가
            </span>
            <button
              onClick={onClickLogout}
              className="md:flex hidden px-3 py-1.5 rounded-lg bg-gray-100 text-gray-800 font-semibold"
            >
              로그아웃
            </button>
            <div className="w-14 h-14 rounded-full bg-gray-300" />
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
