import SideBar from "../components/SiderBar";
import UsersList from "../components/UsersList";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

interface Challange {
  type: string;
  description: string;
  amount: number;
  date: string;
}

// export interface ChallangesData {
//   _id: string;
//   login: string;
//   id: number;
//   name: string;
//   avatar_url: string;
//   location: string;
//   level: number;
//   currentExperience: number;
//   challangesHistory: Array<Challange>;
// }

// interface ChallangeProps {
//   response: ChallangesData;
// }

interface UsersData {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  level: number;
  currentExperience: number;
  challangesHistory: Array<Challange>;
}

interface UsersProps {
  data: Array<UsersData>;
}

export default function LeaderBorder(props: UsersProps) {
  const router = useRouter();

  console.log(props);

  return (
    <>
      <div className="flex">
        <SideBar />

        <div className="h-screen w-full m-auto p-12 flex flex-col items-center">
          <header className="flex w-9/12 max-w-screen-lg items-start ">
            <h1 className="font-bold text-white">LeaderBoard</h1>
          </header>

          <section className="flex mt-10 mb-2 justify-between w-9/12 max-w-screen-lg ">
            <div className="flex w-3/12 justify-between">
              <p className="font-semibold text-white">Posição</p>
              <p className="font-semibold text-white">Usuários</p>
            </div>

            <div className="flex w-6/12 justify-center">
              <p className="font-semibold text-white">Desafios</p>
              <p className="font-semibold text-white ml-36">Experiência</p>
            </div>
          </section>
          {props.data &&
            props.data.map((u, index) => (
              <>
                <UsersList
                  index={index + 1}
                  id={u.id}
                  login={u.login}
                  avatar_url={u.avatar_url}
                  name={u.name}
                  location={u.location}
                  level={u.level}
                  currentExperience={u.currentExperience}
                  challangesHistory={u.challangesHistory}
                />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {

  const users = await axios.get(
    `${process.env.BASE_URL}/api/user/users`
  );


  return {
    props: {
      data: users.data,
    },
  };
};
