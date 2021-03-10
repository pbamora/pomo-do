import SideBar from "../components/SiderBar";
import ExperienceBar from "../components/ExperienceBar";
import UserProfile from "../components/UserProfile";
import CompletedChallenges from "../components/CompletedChallanges";
import CountDown from "../components/CountDown";
import Challenges from "../components/Challanges";
import ChallangesHistory from "../components/ChallangesHistory";
import { ClipList, Close, TurnRight } from "../../public/icons";
import { ChallengesProvider } from "../contexts/ChallangesContext";
import { CountDownProvider } from "../contexts/CounDownContext";
import { UserProvider } from "../contexts/UserContext";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

interface Challange {
  id: string;
  type: string;
  description: string;
  amount: number;
  date: string;
}

export interface ChallangesData {
  _id: string;
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  location: string;
  level: number;
  currentExperience: number;
  challangesHistory: Array<Challange>;
}

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [user, setUser] = useState<ChallangesData>({} as ChallangesData);
  const router = useRouter();

  const getUser = async (id: string) => {
    const response = await axios.get(
      `${process.env.BASE_URL ? process.env.BASE_URL : ""}/api/user/${Number(
        id
      )}`
    );

    setUser(response.data);
  };

  useEffect(() => {
    const id = Cookies.get("id");

    if (!id) {
      router.push("/login");
    }

    getUser(id);
  });

  return (
    <>
      <UserProvider
        id={user.id}
        login={user.login}
        location={user.location}
        avatar_url={user.avatar_url}
        name={user.name}
        challangesHistory={user.challangesHistory}
        level={user.level}
      >
        <ChallengesProvider
          level={user.level}
          currentExperience={user.currentExperience}
          challangesHistory={user.challangesHistory}
        >
          <CountDownProvider>
            <div className="flex">
              <SideBar />

              <div className="h-screen w-full m-auto pt-5 flex flex-col  items-center">
                <ExperienceBar />

                <section className="flex w-9/12 max-w-screen-lg m-auto grid-flow-col grid-cols-2 gap-24 items-center ">
                  <div className=" flex flex-col w-6/12 ">
                    <UserProfile />
                    <CompletedChallenges />
                    <CountDown />
                  </div>

                  <div className=" flex flex-col w-6/12 items-center ">
                    <Challenges />
                  </div>
                </section>
              </div>
              <button
                className={`fixed z-50 bottom-5 focus:outline-none ${
                  showSideBar ? "right-96 top-0" : "right-20"
                }`}
                type="button"
                onClick={() => setShowSideBar(!showSideBar)}
              >
                {!showSideBar ? (
                  <ClipList width="32" fill="#fff" />
                ) : (
                  <TurnRight width="32" fill="#fff" />
                )}
              </button>
              {showSideBar && (
                <ChallangesHistory challangesHistory={user.challangesHistory} />
              )}
            </div>
          </CountDownProvider>
        </ChallengesProvider>
      </UserProvider>
    </>
  );
}
