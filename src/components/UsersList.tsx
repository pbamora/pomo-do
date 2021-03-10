import { ClipList, Close, FireIcon, TurnRight } from "../../public/icons";

interface Challange {
  type: string;
  description: string;
  amount: number;
  date: string;
}

interface UsersData {
  index: number;
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  level: number;
  currentExperience: number;
  challangesHistory: Array<Challange>;
}

export default function UsersList(props: UsersData) {
  const totalExperience = props.challangesHistory.reduce(
    (acc, challange) => challange.amount + acc,
    0
  );

  return (
    <>
      {props.index === 1 ? (
        <>
          <div className="absolute top-44 right-1/2 ease-out bg-center z-50 animate-bounce">
            <img
              className=" "
              src="./veteran_boss.svg"
              alt="medal veteran war"
              width={65}
            />
          </div>
          <section className="flex w-9/12 max-w-screen-lg h-20 m-2 ">
            <div className="flex items-center justify-center bg-gradient-to-br z-40 bg-greenL animate-pulse shadow-2xl rounded-l-4xl w-20">
              <h1 className="text-white font-bold">#{props.index}</h1>
            </div>
            <span className="flex-col w-0.5 h-20" />
            <div className="flex items-center bg-gradient-to-br bg-white bg-opacity-25 border border-white border-opacity-50 rounded-r-1xl w-11/12">
              <div className="flex mr-4 ml-4 items-center justify-between h-12 w-full ">
                <div className="flex items-center ">
                  <img
                    className="w-12 rounded-full"
                    src={props.avatar_url}
                    alt=""
                  />
                  <div className="flex-col ml-2">
                    <p className="font-bold text-lg text-baseDark ">
                      {props.name || props.login}
                    </p>
                    <div className="flex ">
                      <img
                        src="./icons/level-up.svg"
                        alt="levelup"
                        width={12}
                      />
                      <p className="font-semibold text text-base text-baseDark ml-2">
                        level {props.level}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex w-5/12 justify-between">
                  <div className="">
                    <p className="text-baseDark font-bold">
                      {props.challangesHistory.length}
                    </p>
                  </div>

                  <div className="flex mr-6 ">
                    <p className="text-text-baseDark font-bold">{totalExperience}</p>
                    <FireIcon width="16" fill="#18a09f" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="flex w-9/12 max-w-screen-lg h-20 m-2">
          <div className="flex items-center justify-center bg-white bg-opacity-25 border border-white border-opacity-50 shadow-2xl rounded-l-4xl w-20">
            <h1 className="text-white font-bold">#{props.index}</h1>
          </div>
          <span className="flex-col w-0.5 h-20" />
          <div className="flex items-center bg-white bg-opacity-25 border border-white border-opacity-50 shadow-2xl rounded-r-1xl w-11/12">
            <div className="flex mr-4 ml-4 items-center justify-between h-12 w-full ">
              <div className="flex items-center ">
                <img
                  className="w-12 rounded-full"
                  src={props.avatar_url}
                  alt=""
                />
                <div className="flex-col ml-2">
                  <p className="font-bold text-lg text-baseDark ">
                    {props.name || props.login}
                  </p>
                  <div className="flex ">
                    <img src="./icons/level-up.svg" alt="levelup" width={12} />
                    <p className="font-semibold text text-base text-baseDark ml-2">
                      level {props.level}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-5/12 justify-between">
                <div className="">
                  <p className="text-baseDark font-bold">
                    {props.challangesHistory.length}
                  </p>
                </div>

                <div className="flex mr-6">
                  <p className="text-baseDark font-bold">{totalExperience}</p>
                  <FireIcon width="16" fill="#18a09f" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
