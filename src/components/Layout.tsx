import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";
import LoginModal from "./LoginModal";

const Layout = () => {
  const [loginModal, setLoginModal] = useState(false);
  const onClickLogin = () => {
    setLoginModal(true);
  };

  const onClickOverlay = () => {
    setLoginModal(false);
  };
  return (
    <div className="relative min-h-screen">
      {loginModal && (
        <>
          <div
            className="w-full min-h-scree h-full fixed bg-black opacity-70 cursor-pointer"
            onClick={onClickOverlay}
          />
          <div className="absolute w-1/2 h-fit bg-white rounded-xl top-0 left-0 right-0 bottom-0 m-auto px-20 py-12">
            <LoginModal />
          </div>
        </>
      )}
      <Nav onClickLogin={onClickLogin} />
      <Outlet />
    </div>
  );
};

export default Layout;
