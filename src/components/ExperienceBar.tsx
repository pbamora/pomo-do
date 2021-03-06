import { useContext } from "react";
import { FireIcon } from "../../public/icons";
import { ChallangesContext } from "../contexts/ChallangesContext";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallangesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  const totalExperience = experienceToNextLevel - currentExperience;

  return (
    <>
      <header className="flex w-9/12 max-w-screen-lg items-center shadow-2xl">
        <div className="flex justify-center p-3 items-center">
          <span className="font-black ml-2 text-white"></span>
          <FireIcon width="15" fill="#0C85E0" />
        </div>
        <div className="flex-1 h-1 rounded-1xl bg-gray m-1 relative ">
          <span
            style={{ width: `${percentToNextLevel}%` }}
            className={`h-1 rounded-5xl bg-blue absolute`}
          ></span>
        </div>
        <div className="flex justify-center p-3 items-center">
          <span className="font-black ml-2 text-white">
            {totalExperience}
          </span>
          <FireIcon width="15" fill="#0C85E0" />
        </div>
      </header>
    </>
  );
}
