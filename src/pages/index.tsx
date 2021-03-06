import SideBar from "../components/SiderBar";
import ExperienceBar from "../components/ExperienceBar";
import UserProfile from "../components/UserProfile";
import CompletedChallenges from "../components/CompletedChallanges";
import CountDown from "../components/CountDown";
import Challenges from "../components/Challanges";
import Login from "./login";
import { ChallengesProvider } from "../contexts/ChallangesContext";
import { CountDownProvider } from "../contexts/CounDownContext";
import { useSession } from "next-auth/client";

export interface ChallangesProps {
  level: number;
  currentExperience: number;
  numChallangesCompleted: number;
}

export default function Home(stars, props: ChallangesProps) {
  const [session, loading] = useSession();

  console.log(stars)

  return (
    <>
      {session ? (
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          numChallangesCompleted={props.numChallangesCompleted}
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
            </div>
          </CountDownProvider>
        </ChallengesProvider>
      ) : (
        <Login />
      )}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const { level, currentExperience, numChallangesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallanges: Number(numChallangesCompleted),
    },
  };
};
