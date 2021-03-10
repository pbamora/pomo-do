import { createContext } from "react";

interface Challanges {
  type: string;
  description: string;
  amount: number;
  date: string;
}

interface UserProviderProps {
  children: React.ReactNode;
  id: number;
  login: string;
  location: string;
  avatar_url: string;
  name: string;
  level: number;
  challangesHistory: Array<Challanges>;
}

interface UserProviderData {
  id: number;
  login: string;
  level: number;
  location: string;
  avatar_url: string;
  name: string;
  challangesHistory: Array<Challanges>;
}

export const UserContext = createContext({} as UserProviderData);

export function UserProvider({ children, ...rest }: UserProviderProps) {
  const { avatar_url, id, location, login, name, challangesHistory, level } = {
    ...rest,
  };

  return (
    <UserContext.Provider
      value={{
        id,
        login,
        location,
        avatar_url,
        name,
        challangesHistory,
        level,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
