import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";

export default function Modal() {
  const { level } = useContext(ChallangesContext);
  return (
    <>
      <div className="absolute z-40 w-screen h-screen bg-textHighligth bg-opacity-20">
        <div className="flex justify-center items-center w-screen h-screen ">
          <div className=" p-12 flex justify-center items-center flex-col w-96 h-auto rounded-1xl bg-gradient-to-br from-base to-baseDark shadow-2xl">
            <div className="flex justify-center items-center bg-background-union animate-pulse ease-out bg-no-repeat bg-center w-48 h-full">
              <h1 className="text-blue font-extrabold text-9xl ">{level}</h1>
            </div>
            <h3 className="text-white font-bold">Parabéns</h3>

            <p className="text-white font-bold">Você alcançou um novo level!</p>
          </div>
        </div>
      </div>
    </>
  );
}
