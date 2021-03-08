import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import { HomeIcon, Trophy } from "../../public/icons";
import { SideBarContext } from "../contexts/SidebarContext";

export default function SideBar() {
  const { navigateToHome, selected, navigateToLeaderBoard } = useContext(
    SideBarContext
  );

  return (
    <>
      <div className=" h-screen w-20 pt-5 bg-gradient-to-br from-baseDark to-base flex flex-col items-center ">
        <img src="./logo-icon.svg" alt="icon logo" width={40} />

        <button
          onClick={(): void => navigateToHome()}
          className={` mt-52 h-16 w-full fill-current    ${
            selected === "Home"
              ? "border-blue rounded-tl-1xl rounded-bl-1xl shadow-2xl border-l-4"
              : "hover:bg-baseDark transition-colors duration-1000 "
          } focus:outline-none flex items-center justify-center`}
        >
          <HomeIcon
            fill={`${selected === "Home" ? "#0C85E0" : "#fff"}`}
            width="30"
          />
        </button>
        <button
          onClick={(): void => navigateToLeaderBoard()}
          className={` h-16 mb-3 w-full fill-current  ${
            selected === "Trophy"
              ? "border-blue rounded-tl-1xl rounded-bl-1xl shadow-2xl border-l-4"
              : "hover:bg-baseDark transition-colors duration-1000"
          } focus:outline-none flex items-center justify-center`}
        >
          <Trophy
            fill={`${selected === "Trophy" ? "#0C85E0" : "#fff"}`}
            width="26"
          />
        </button>
      </div>
    </>
  );
}
