import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { UserContext } from "../contexts/UserContext";

export default function CompletedChallenges() {
  const { challangesHistory } = useContext(UserContext);

  return (
    <>
      <div className="flex items-center max-w-xs mt-14 justify-between border-b-2 border-opacity-75 border-white font-bold">
        <span className="mb-2 text-white"> Desafios Completos</span>
        <span className="mb-2 text-white">
          {!challangesHistory ? 0 : challangesHistory.length}{" "}
        </span>
      </div>
    </>
  );
}
