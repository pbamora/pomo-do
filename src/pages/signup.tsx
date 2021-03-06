export default function SignUp() {
  return (
    <>
      <div className=" flex justify-center container max-w-none h-screen mr-auto flex-col bg-background-logo bg-no-repeat">
        <section className="flex p-8 items-center justify-center">
          <div className="container p-16 flex flex-col max-w-xl max-auto items-center justify-center rounded-1xl bg-base shadow-2xl ">
            <h1 className="text-white">Registrar</h1>

            <p className="text-white mt-5"> com </p>

            <div className="flex flex-col w-80 items-center mt-2 ">
              <div className="flex w-full flex-row mt-5 ">
                <button className="flex items-center justify-center hover:bg-base duration-1000 w-6/12 h-14 p-2 rounded-1xl shadow-2xl bg-baseDark">
                  <img src="./icons/google.svg" alt="" />
                  <p className="text-white font-bold ml-3">Google</p>
                </button>
                <button className="flex ml-2 items-center justify-center hover:bg-base duration-1000 w-6/12 h-14 p-2 rounded-1xl shadow-2xl bg-baseDark">
                  <img src="./icons/facebook.svg" alt="" />
                  <p className="text-white font-bold ml-3">Facebook</p>
                </button>
              </div>

              <p className="text-white mt-5 mb-2"> ou </p>

              <div className=" flex items-center justify-center h-20 w-full ">
                <button className="flex items-center justify-center hover:bg-base duration-1000 w-full h-14 rounded-1xl shadow-2xl bg-baseDark">
                  <img src="./icons/github.svg" alt="" width="30" />
                  <p className="text-white font-bold ml-3">Github</p>
                </button>
              </div>

              <p className="text-white mt-10">
                Já possui uma conta?{" "}
                <a className="text-blue" href="/">
                  Entrar
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
