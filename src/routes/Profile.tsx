import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { getMyPostAPI } from "../api";
import Card from "../components/Card";
import { IPost, IUser } from "../types";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data } = useQuery("posts", getMyPostAPI, {
    retry: false,
  });
  const { data: user } = useQuery<IUser>(["me"]);

  const onClickEditProfile = () => {
    navigate("/my-profile/edit");
  };

  return (
    <div className="w-full min-h-screen flex flex-col xl:px-52 lg:px-44 md:px-32 sm:px-20 px-10 py-8">
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-4 mb-12">
        {user?.avatar !== "" ? (
          <img
            src={user?.avatar}
            alt="profile-avatar"
            className="w-52 h-52 rounded-full"
          />
        ) : (
          <div className="w-52 h-52 rounded-full bg-gray-300" />
        )}

        <div className="md:w-2/3 w-full flex flex-col justify-center items-start h-full text-gray-300">
          <div className="w-full flex justify-between items-center">
            <h1 className="font-bold md:text-5xl sm:text-4xl text-3xl">
              {user?.username}
            </h1>
            {/*프로필 수정페이지로 이동하게 만들기*/}
            <svg
              onClick={onClickEditProfile}
              className="w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
              ></path>
            </svg>
          </div>
          <span className="md:text-2xl sm:text-xl text-lg font-semibold mt-3">
            {user?.email}
          </span>
          <span className="md:text-2xl sm:text-xl text-lg font-semibold mt-2">
            {user?.name}
          </span>
        </div>
      </div>
      {!isLoading &&
        !isError &&
        data.map((post: IPost) => <Card key={post.id} {...post} />)}
    </div>
  );
};

export default Profile;
