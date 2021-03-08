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
import { useState } from "react";

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

interface ChallangeProps {
  response: ChallangesData;
}

export default function Home(props: ChallangeProps) {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();

  return (
    <>
      <UserProvider
        id={props.response.id}
        login={props.response.login}
        location={props.response.location}
        avatar_url={props.response.avatar_url}
        name={props.response.name}
        challangesHistory={props.response.challangesHistory}
      >
        <ChallengesProvider
          level={props.response.level}
          currentExperience={props.response.currentExperience}
          challangesHistory={props.response.challangesHistory}
        >
          <CountDownProvider>
            <div className="flex">
              <SideBar />

              <div className="h-screen w-full m-auto pt-5 bg-base flex flex-col  items-center">
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
                  showSideBar ? "right-96 top-32" : "right-20"
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
              {showSideBar && <ChallangesHistory />}
            </div>
          </CountDownProvider>
        </ChallengesProvider>
      </UserProvider>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.req.cookies;

  const response = await axios.get(`${process.env.BASE_URL}/api/user/${id}`);

  return {
    props: {
      id: id,
      response: response.data,
    },
  };
};
