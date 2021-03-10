import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { HomeIcon, Trophy } from "../../public/icons";
import { SideBarContext } from "../contexts/SidebarContext";

export default function SideBar() {
  const router = useRouter();
  const { navigateToHome, selected, navigateToLeaderBoard } = useContext(
    SideBarContext
  );

  return (
    <>
      <div className=" h-screen w-20 pt-5 bg-gradient-to-br bg-white bg-opacity-40 border border-white border-opacity-40 rounded-tr-4xl rounded-br-4xl flex-col items-center justify-center ">
        <div className="flex items-center justify-center">
          <button onClick={() => router.push("/")} className="bg-none focus:outline-none">
            <img src="./logo-icon.svg" alt="icon logo" width={40} />
          </button>
        </div>

        <button
          onClick={(): void => navigateToHome()}
          className={` mt-52 h-16 w-full fill-current ${
            selected === "Home" &&
            "border-greenL bg-white rounded-tl-1xl rounded-bl-1xl shadow-3xl border-l-4"
          } focus:outline-none flex items-center justify-center`}
        >
          <HomeIcon
            fill={`${selected === "Home" ? "#18a09f" : "#fff"}`}
            width="30"
          />
        </button>
        <button
          onClick={(): void => navigateToLeaderBoard()}
          className={` h-16 mb-3 w-full fill-current  ${
            selected === "Trophy" &&
            "border-greenL bg-white rounded-tl-1xl rounded-bl-1xl shadow-3xl border-l-4"
          } focus:outline-none flex items-center justify-center`}
        >
          <Trophy
            fill={`${selected === "Trophy" ? "#18a09f" : "#fff"}`}
            width="26"
          />
        </button>
      </div>
    </>
  );
}
