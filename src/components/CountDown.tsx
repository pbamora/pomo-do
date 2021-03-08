import { useContext } from "react";
import { CountDownContext } from "../contexts/CounDownContext";

export default function CountDown() {
  const {
    minutes,
    seconds,
    startCountDown,
    resetCountDown,
    isCounting,
    hasFinished,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <>
      <div className="flex items-center max-w-xs mt-10 ">
        <div className=" w-full h-28 rounded-1xl bg-gradient-to-br from-baseDark to-base flex items-center shadow-2xl">
          <h1 className=" flex w-full text-7xl font-extrabold text-white justify-center">
            {minuteLeft}
          </h1>
          <span className=" flex h-full w-0.5 bg-white "></span>
          <h1 className=" flex w-full text-7xl font-extrabold text-white justify-center">
            {minuteRight}
          </h1>
        </div>

        <span className="font-extrabold text-6xl p-2 text-white ">:</span>

        <div className=" w-full h-28 rounded-1xl bg-gradient-to-br from-baseDark to-base flex items-center shadow-2xl ">
          <h1 className=" flex w-full text-7xl font-extrabold text-white justify-center ">
            {secondLeft}
          </h1>
          <span className=" flex h-full w-0.5 bg-white "></span>
          <h1 className=" flex w-full text-7xl font-extrabold text-white justify-center">
            {secondRight}
          </h1>
        </div>
      </div>
      <div className="flex max-w-xs mt-6 ">
        {hasFinished ? (
          <button
            className="flex items-center cursor-not-allowed bg-white border-b-4 border-blue transition-colors duration-1000 justify-center text-baseDark font-bold rounded-1xl w-full h-16 "
          >
            Ciclo encerrado
          </button>
        ) : (
          <>
            {!isCounting ? (
              <button
                onClick={startCountDown}
                className="flex items-center hover:bg-blueDark transition-colors duration-1000 justify-center text-white font-bold rounded-1xl bg-blue w-full h-16 "
              >
                Iniciar ciclo
                <img
                  className="ml-2"
                  src="./icons/play_arrow.svg"
                  alt=""
                  width={16}
                />
              </button>
            ) : (
              <button
                onClick={startCountDown}
                className="flex items-center hover:bg-blueDark transition-colors duration-1000 justify-center text-white font-bold rounded-1xl bg-blue w-full h-16 "
              >
                Encerrar ciclo
                <img
                  className="ml-2"
                  src="./icons/play_arrow.svg"
                  alt=""
                  width={16}
                />
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
}
