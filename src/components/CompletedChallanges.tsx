import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";

export default function CompletedChallenges() {
  const { numChallangesCompleted } = useContext(ChallangesContext);

  return (
    <>
      <div className="flex items-center max-w-xs mt-14 justify-between border-b-2 border-opacity-75 border-gray font-bold">
        <span className="mb-2 text-white"> Desafios Completos</span>
        <span className="mb-2 text-white"> {numChallangesCompleted} </span>
      </div>
    </>
  );
}
