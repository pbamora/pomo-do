import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ChallangesContext } from "../contexts/ChallangesContext";

export default function UserProfile() {
  const { session } = useContext(AuthContext);
  const { level } = useContext(ChallangesContext);

  return (
    <>
      <div className="flex max-w-xs items-center">
        <img
          className="rounded-full w-16 h-16"
          src={session.user.image}
          alt="user"
        />
        <div className="flex-col ml-4">
          <strong className=" text-2xl font-bold text-white">
            {session.user.name}
          </strong>
          <p className=" flex items-center text-base font-medium text-white mt-1">
            <img
              className="mr-2"
              src="./icons/level-up.svg"
              alt=""
              width={14}
            />
            level {level}
          </p>
        </div>
      </div>
    </>
  );
}
