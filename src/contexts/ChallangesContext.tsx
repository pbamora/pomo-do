import { createContext, useContext, useEffect, useState } from "react";
import challanges from "../../challanges.json";
import axios from "axios";
import { v4 } from "uuid";
import { UserContext } from "./UserContext";
import Modal from "../components/Modal";
import { Close } from "../../public/icons";

interface ChallangesProviderProps {
  children: React.ReactNode;
  level: number;
  currentExperience: number;
  challangesHistory: Array<ChallengeActiveProps>;
}

interface ChallengeActiveProps {
  id: string;
  date: string;
  type: string;
  description: string;
  amount: number;
}

interface ChallangesProviderData {
  activeChallange: ChallengeActiveProps;
  challangesHistory: Array<ChallengeActiveProps>;
  completed: boolean;
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
  >(rest.challangesHistory || []);

  const [modal, setModal] = useState(false);

  const [completed, setCompleted] = useState(false);

  const { id } = useContext(UserContext);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    const config = { headers: { "Content-Type": "application/json" } };

    axios.put(
      `/api/user`,
      {
        id,
        level,
        currentExperience,
        challangesHistory,
      },
      config
    );
  }, [level, currentExperience, challangesHistory]);

  const startNewChallange = () => {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
    const challange = challanges[randomChallangeIndex];

    setActiveChallange(challange);
  };

  function levelUp() {
    setLevel(level + 1);

    setModal(true);
  }

  const completedChallange = () => {

    const { amount } = activeChallange;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);

    setCompleted(true);

    const data = new Date();

    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();
    const hour = data.getHours().toString();
    const minuts = data.getMinutes().toString();

    activeChallange.id = v4();
    activeChallange.date = `${dia}/${mes}/${ano} - ${hour}:${minuts}`;

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
        currentExperience,
        experienceToNextLevel,
        level,
      }}
    >
      {modal && (
        <div>
          <button
            className="absolute z-50 top-2/3 right-1/2"
            onClick={() => setModal(false)}
          >
            <Close width="30" fill="#fff" />
          </button>
          <Modal />
        </div>
      )}
      <div style={{ filter: `${modal ? "blur(5px)" : "none"}` }}>
        {children}
      </div>
    </ChallangesContext.Provider>
  );
}
