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

      const userExists = await axios.get(`api/user/${id}`);

      Cookies.set("login", String(login));
      Cookies.set("id", String(id));
      Cookies.set("avatar_url", String(avatar_url));
      Cookies.set("location", String(location));
      Cookies.set("name", String(name));

      const userID = Cookies.get("id");

      if (!userExists.data && userID) {
        await axios.post("/api/user", {
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
          <div className="container p-16 flex flex-col max-w-xl max-auto items-center justify-center rounded-1xl bg-base shadow-2xl ">
            <img className="mb-12" src="./logo.svg" alt="pomodo" width={200} />
            <h1 className="text-white">Login</h1>

            <div className="flex justify-center items-center mt-10">
              <img
                className="text-white text-center mr-5"
                src="./icons/github.svg"
                alt=""
              />
              <p className="text-white text-center">
                Digite seu username do github <br /> para entrar!
              </p>
            </div>

            <div className="flex flex-col w-80 items-center mt-10 ">
              <div className=" flex items-center justify-center h-20 w-full ">
                <input
                  type="text"
                  placeholder="Digite seu username"
                  className="p-5 focus:outline-none text-gray items-center justify-center w-full h-full bg-gradient-to-r from-base to-baseDark "
                  value={userName}
                  onChange={(event) => handleChange(event)}
                />
                <button
                  type="button"
                  onClick={login}
                  className={`flex items-center justify-center h-full p-5 w-20 text-gray ${
                    !validate ? "bg-baseDark" : "bg-blue"
                  }`}
                >
                  {validate ? (
                    <div>
                      <svg
                        className=" ml-2 animate-spin rounded-full border-t-4 border-white h-5 w-5 mr-3 bg-blue"
                        viewBox="0 0 24 24"
                      />
                    </div>
                  ) : (
                    <img src="./icons/play_arrow.svg" alt="" />
                  )}
                </button>
              </div>

              <p className="text-white text-center mt-10">
                Um app para quem passa mais de 6h na frente do cumputador 🙂.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
