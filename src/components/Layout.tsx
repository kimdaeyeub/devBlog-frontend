import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { useRecoilState } from "recoil";
import { loginModalState } from "../atom";
import Footer from "./Footer";

const Layout = () => {
  const [modal, setModal] = useRecoilState(loginModalState);
  const [signUp, setSignUp] = useState(false);
  const onClickLogin = () => {
    setModal(true);
    setSignUp(false);
  };

  const onClickSignUp = async () => {
    setModal(true);
    setSignUp(true);
  };

  const onClickOverlay = () => {
    setModal(false);
    setSignUp(false);
  };

  return (
    <div className="relative min-h-screen">
      {modal && (
        <>
          <div
            className="w-full min-h-scree h-full fixed bg-black opacity-70 cursor-pointer"
            onClick={onClickOverlay}
          />
          <div className="absolute w-1/2 h-fit bg-white rounded-xl top-0 left-0 right-0 bottom-0 m-auto px-20 py-12">
            <LoginModal signUp={signUp} />
          </div>
        </>
      )}
      <Nav onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
