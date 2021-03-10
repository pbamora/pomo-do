import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const router = useRouter();
  const [validate, setValidate] = useState(false);
  const [userName, setUsername] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const login = async () => {
    try {
      if (!userName) return;

      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      setValidate(true);

      const { login, id, avatar_url, location, name } = response.data;

      const userExists = await axios.get(
        `${process.env.BASE_URL ? process.env.BASE_URL : ""}api/user/${id}`
      );

      Cookies.set("login", String(login));
      Cookies.set("id", String(id));
      Cookies.set("avatar_url", String(avatar_url));
      Cookies.set("location", String(location));
      Cookies.set("name", String(name));
      Cookies.set("starter", "true");

      const userID = Cookies.get("id");

      if (!userExists.data && userID) {
        await axios.post(`/api/user`, {
          login,
          avatar_url,
          id,
          location,
          name,
        });
      }

      router.push("/");
    } catch (error) {
      alert(`Não existe conta no github com ${userName}`);
    }
  };

  return (
    <>
      <div className=" flex justify-center container max-w-none h-screen mr-auto flex-col bg-background-logo bg-no-repeat">
        <section className="flex p-8 items-center justify-center">
          <div className="container p-16 flex flex-col max-w-xl max-auto items-center justify-center border border-white border-opacity-40 bg-white bg-opacity-20 rounded-4xl shadow-2xl ">
            <img className="mb-12" src="./logo.svg" alt="pomodo" width={200} />
            <h1 className="text-greenL">Login</h1>

            <div className="flex justify-center items-center mt-10">
              <img
                className="text-text text-center mr-5"
                src="./icons/github.svg"
                alt=""
              />
              <p className="text-greenL text-center">
                Digite seu username do github <br /> para entrar!
              </p>
            </div>

            <div className="flex flex-col w-80 items-center mt-10 ">
              <div className=" flex items-center justify-center h-20 w-full ">
                <input
                  type="text"
                  placeholder="Digite seu username"
                  className="p-5 focus:outline-none placeholder-greenL items-center text-greenL justify-center w-full h-15 rounded-tl-4xl rounded-bl-4xl bg-white bg-opacity-25 "
                  value={userName}
                  onChange={(event) => handleChange(event)}
                />
                <button
                  type="button"
                  onClick={login}
                  className={`flex focus:outline-none items-center justify-center h-50 rounded-tr-4xl rounded-br-4xl p-5 w-20 text-white ${
                    !validate
                      ? "bg-gradient-to-br from-greenL to-greenR"
                      : "bg-gradient-to-br from-greenR to-greenL"
                  }`}
                >
                  {validate ? (
                    <div>
                      <img
                        className="animate-spin"
                        src="./icons/play_arrow.svg"
                        alt=""
                      />
                    </div>
                  ) : (
                    <img src="./icons/play_arrow.svg" alt="" />
                  )}
                </button>
              </div>

              <p className=" text-greenL text-center mt-10">
                Um app para quem passa mais de 6h na frente do cumputador 🙂.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
