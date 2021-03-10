import { useSession, csrfToken } from "next-auth/client";
import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { UserContext } from "../contexts/UserContext";

export default function UserProfile() {
  const { avatar_url, login, location, level } = useContext(UserContext);

  return (
    <>
      <div className="flex max-w-xs items-center">
        <img className="rounded-full w-16 h-16" src={avatar_url} alt="user" />
        <div className="flex-col ml-4">
          <strong className=" text-2xl font-bold text-white">{login}</strong>
          <div className="flex">
            <p className=" flex items-center text-base font-bold text-white mt-1">
              <img
                className="mr-2"
                src="./icons/level-up.svg"
                alt=""
                width={14}
              />
              level {level}
            </p>
            <p className=" flex items-center font-medium text-base text-white mt-1 ml-3">
              | {location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
