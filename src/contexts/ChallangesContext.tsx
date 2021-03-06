import { createContext, useEffect, useState } from "react";
import challanges from "../../challanges.json";
import Cookies from "js-cookie";

interface ChallangesProviderProps {
  children: React.ReactNode;
  level: number;
  currentExperience: number;
  numChallangesCompleted: number;
}

interface ChallengeActiveProps {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallangesProviderData {
  activeChallange: ChallengeActiveProps;
  challangesHistory: Array<ChallengeActiveProps>;
  completed: boolean;
  numChallangesCompleted: number;
  currentExperience: number;
  experienceToNextLevel: number;
  level: number;
  startNewChallange: () => void;
  completedChallange: () => void;
}

export const ChallangesContext = createContext({} as ChallangesProviderData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallangesProviderProps) {
  const [level, setLevel] = useState(rest.level || 1);
  const [activeChallange, setActiveChallange] = useState(null);
  const [currentExperience, setCurrentExperience] = useState<number>(
    rest.currentExperience || 0
  );
  const [challangesHistory, setChallangesHistory] = useState<
    Array<ChallengeActiveProps>
  >([] as any);
  const [numChallangesCompleted, setNumChallangesCompleted] = useState(
    rest.numChallangesCompleted || 0
  );
  const [completed, setCompleted] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    const numChallanges = challangesHistory.length;

    setNumChallangesCompleted(numChallanges);
  }, [challangesHistory]);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("completedChallanges", String(numChallangesCompleted));
  }, [level, currentExperience, challangesHistory]);

  const startNewChallange = () => {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
    const challange = challanges[randomChallangeIndex];

    setActiveChallange(challange);
  };

  function levelUp() {
    setLevel(level + 1);
  }

  const completedChallange = () => {
    if (!activeChallange) {
      return;
    }

    const { amount } = activeChallange;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);

    setCompleted(true);
    setChallangesHistory((oldArray) => [...oldArray, activeChallange]);

    setActiveChallange(null);
  };

  return (
    <ChallangesContext.Provider
      value={{
        startNewChallange,
        activeChallange,
        challangesHistory,
        completedChallange,
        completed,
        numChallangesCompleted,
        currentExperience,
        experienceToNextLevel,
        level,
      }}
    >
      {children}
    </ChallangesContext.Provider>
  );
}
