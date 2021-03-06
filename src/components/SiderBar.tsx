import { useState } from "react";
import { HomeIcon, FireIcon } from "../../public/icons";

export default function SideBar() {
  const typeButton = ["Home", "Fire"];
  const [selected, setIsSelected] = useState(typeButton[0]);

  return (
    <>
      <div className=" h-screen w-20 pt-5 bg-gradient-to-br from-baseDark to-base flex flex-col items-center ">
        <img src="./logo-icon.svg" alt="icon logo" width={40} />

        
        <button
          onClick={() => setIsSelected(typeButton[0])}
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
          onClick={() => setIsSelected(typeButton[1])}
          className={` h-16 mb-3 w-full fill-current  ${
            selected === "Fire"
              ? "border-blue rounded-tl-1xl rounded-bl-1xl shadow-2xl border-l-4"
              : "hover:bg-baseDark transition-colors duration-1000"
          } focus:outline-none flex items-center justify-center`}
        >
          <FireIcon
            fill={`${selected === "Fire" ? "#0C85E0" : "#fff"}`}
            width="30"
          />
        </button>
      </div>
    </>
  );
}
