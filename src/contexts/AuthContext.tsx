import { useSession, signIn, signOut, getCsrfToken } from "next-auth/client";
import { createContext, ReactNode, useState } from "react";
import Login from "../pages/login";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  name: string;
  image: string;
}

interface SessionData {
  acessToken: string;
  experies: string;
  user: UserData;
}

interface AuthProviderData {
  session: SessionData;
}

export const AuthContext = createContext({} as AuthProviderData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, loading] = useSession();

  return (
    <AuthContext.Provider value={{ session }}>
      {!session ? (
        <Login signIn={signIn} />
      ) : (
        <>
          {loading ? (
            <div className="w-screen h-screen bg-baseDark">
              <h1>Carregando</h1>
            </div>
          ) : (
            children
          )}
        </>
      )}
    </AuthContext.Provider>
  );
}
