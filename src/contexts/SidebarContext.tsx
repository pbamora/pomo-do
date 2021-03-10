import { useRouter } from "next/dist/client/router";
import { createContext, useState } from "react";

interface SideBarProviderProps {
  children: React.ReactNode;
}

interface SideBarProviderData {
  selected: string;
  navigateToHome: () => void;
  navigateToLeaderBoard: () => void;
}

export const SideBarContext = createContext({} as SideBarProviderData);

export function SideBarProvider({ children }: SideBarProviderProps) {
  const router = useRouter();
  const typeButton = ["Home", "Trophy"];
  const [selected, setIsSelected] = useState(typeButton[0]);

  const navigateToHome = () => {
    router.push("/");

    setIsSelected(typeButton[0]);
  };

  const navigateToLeaderBoard = () => {
    router.push("/leaderbord");

    setIsSelected(typeButton[1]);
  };

  return (
    <SideBarContext.Provider
      value={{ selected, navigateToHome, navigateToLeaderBoard }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
