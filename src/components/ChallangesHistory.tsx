import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { FireIcon } from "../../public/icons";

export default function ChallangesHistory() {
  const { challangesHistory } = useContext(ChallangesContext);

  const totalExp = challangesHistory.reduce(
    (acc, challange) => challange.amount + acc,
    0
  );

  return (
    <>
      <div className="flex-col absolute right-0 pl-5 pr-5 pt-1 w-96 h-screen bg-gradient-to-tl overflow-y-auto from-baseDark to-base shadow-2xl">
        {challangesHistory && (
          <div className="flex w-full justify-evenly items-center p-3">
            <p className="flex font-semibold text-white">
              Total: {challangesHistory ? challangesHistory.length : 0}
            </p>

            <p className="flex font-semibold text-white">
              Exp: {totalExp} <FireIcon width="16" fill="#0C85E0" />
            </p>
          </div>
        )}

        <div className="flex items-center justify-center p-5">
          <p className="text-white font-bold">Últimos desafios completados:</p>
        </div>

        <div>
          {!challangesHistory ? (
            <>
              <div></div>
            </>
          ) : (
            challangesHistory.map((challange) => (
              <div
                key={challange.id}
                className="flex-col items-center mt-5 rounded-1xl justify-center shadow-xl w-full bg-gradient-to-tl from-baseDark to-base "
              >
                <div className="flex justify-evenly items-center p-3">
                  <img
                    src="./icons/check_circle.svg"
                    alt="check icon"
                    width={30}
                  />
                  <strong className="flex text-xl text-white font-bold">
                    Exercício completado!
                  </strong>
                </div>

                <div className="flex justify-evenly  items-center w-full p-3">
                  <img
                    className=""
                    src={
                      challange.type === "body"
                        ? "./icons/body.svg"
                        : "./icons/eye.svg"
                    }
                    alt="challanges type"
                    width={80}
                  />
                  <div className="flex-col ">
                    <p className=" text-white font-semibold text-center truncate">
                      {challange.date}
                    </p>
                    <div className="flex justify-evenly">
                      <p className=" flex text-white text-center">
                        {challange.amount}{" "}
                        <FireIcon width="16" fill="#0C85E0" />
                      </p>
                      <p className="text-white font-semibold text-center">
                        Tipo: {challange.type}
                      </p>
                    </div>
                  </div>
                </div>

                <p className=" p-3 text-white text-center font-semibold truncate ">
                  {challange.description}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
