import { useContext } from "react";
import { ChallangesContext } from "../contexts/ChallangesContext";
import { FireIcon } from "../../public/icons";

interface ChallengeData {
  id: string;
  date: string;
  type: string;
  description: string;
  amount: number;
}

interface Challanges {
  challangesHistory: Array<ChallengeData>;
}

export default function ChallangesHistory(props: Challanges) {
  const { challangesHistory } = props;

  const totalExp = challangesHistory.reduce(
    (acc, challange) => challange.amount + acc,
    0
  );

  return (
    <>
      <div className="flex-col absolute right-0 pl-5 pr-5 pt-1 w-96 h-screen rounded-tl-4xl rounded-bl-4xl bg-gradient-to-tl overflow-y-auto bg-white bg-opacity-40 shadow-2xl">
        {challangesHistory && (
          <div className="flex w-full justify-evenly items-center p-3">
            <p className="flex font-semibold text-baseDark">
              Total: {challangesHistory ? challangesHistory.length : 0}
            </p>

            <p className="flex font-semibold text-baseDark">
              Exp: {totalExp} <FireIcon width="16" fill="#18a09f" />
            </p>
          </div>
        )}

        <div className="flex items-center justify-center p-5">
          <p className="text-baseDark font-bold">
            Últimos desafios completados:
          </p>
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
                className="flex-col items-center mt-5 rounded-1xl justify-center shadow-2xl w-full bg-white "
              >
                <div className="flex justify-evenly items-center p-3">
                  <img
                    src="./icons/check_circle.svg"
                    alt="check icon"
                    width={30}
                  />
                  <strong className="flex text-xl text-baseDark font-bold">
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
                    <p className=" text-baseDark font-semibold text-center truncate">
                      {challange.date}
                    </p>
                    <div className="flex justify-evenly">
                      <p className=" flex text-baseDark text-center">
                        {challange.amount}{" "}
                        <FireIcon width="16" fill="#18a09f" />
                      </p>
                      <p className="text-baseDark font-semibold text-center">
                        Tipo: {challange.type}
                      </p>
                    </div>
                  </div>
                </div>

                <p className=" p-3 text-baseDark text-center font-semibold truncate ">
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
