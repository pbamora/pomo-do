import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { FireIcon } from "../../public/icons";

export default function Challenges() {
  const { activeChallange, completedChallange } = useContext(ChallangesContext);

  return (
    <>
      <section className="flex p-8 items-center justify-center">
        {!activeChallange ? (
          <div className="container p-16 flex-col max-w-xl max-auto items-center justify-center rounded-1xl bg-gradient-to-br from-baseDark to-base flex shadow-2xl ">
            <h1 className="text-white text-center">
              Inicie um ciclo para receber desafios
            </h1>

            <div className="flex items-center justify-center flex-col w-80 mt-10 ">
              <img
                className="transition duration-500 animate-bounce"
                src="./icons/level-up.svg"
                alt=""
                width={100}
              />

              <p className="font-semibold mt-6 text-white text-center">
                Avance de level completando <br /> os desafios!
              </p>
            </div>
          </div>
        ) : (
          <div className="container p-16 flex flex-col max-w-xl max-auto items-center justify-center rounded-1xl bg-gradient-to-br from-base to-baseDark shadow-2xl ">
            <div className="flex justify-center items-center ">
              <h1 className="text-white text-center ">
                Ganhe {activeChallange.amount}
              </h1>
              <FireIcon width="30" fill="#0C85E0" />
            </div>

            <div className="flex items-center justify-center flex-col w-80 mt-10 ">
              {activeChallange.type === "eye" ? (
                <img src="./icons/eye.svg" alt="" width={100} />
              ) : (
                <img src="./icons/body.svg" alt="" width={100} />
              )}

              <h1 className="text-white text-center mt-10 ">Exercite-se</h1>

              <p className="font-semibold mt-6 text-white text-center">
                {activeChallange.description}
              </p>
            </div>

            <div className="flex w-full flex-row mt-10 ">
              <button className="flex items-center justify-center hover:bg-redDark duration-1000 w-6/12 h-14 p-2 rounded-1xl shadow-2xl bg-red">
                <p className="text-white font-bold ">Falhei</p>
              </button>
              <button
                type="button"
                onClick={() => completedChallange()}
                className="flex ml-2 items-center justify-center hover:bg-blueDark duration-1000 w-6/12 h-14 p-2 rounded-1xl shadow-2xl bg-blue"
              >
                <FireIcon width="30" fill="#fff" />
                <p className="text-white font-bold">Completei</p>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
