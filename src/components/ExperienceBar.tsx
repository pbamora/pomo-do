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
      <header className="flex w-9/12 max-w-screen-lg items-center rounded-4xl bg-white bg-opacity-10 shadow-2xl">
        <div className="flex justify-center p-3 items-center">
          <span className="font-black ml-2 text-white">0</span>
          <FireIcon width="15" fill="#18a09f" />
        </div>
        <div className="flex-1 h-1 rounded-1xl bg-white m-1 relative ">
          <span
            style={{ width: `${percentToNextLevel}%` }}
            className={`h-1 rounded-5xl bg-greenL absolute`}
          ></span>
        </div>
        <div className="flex justify-center p-3 items-center">
          <span className="font-black ml-2 text-white">
            {totalExperience}
          </span>
          <FireIcon width="15" fill="#18a09f" />
        </div>
      </header>
    </>
  );
}
