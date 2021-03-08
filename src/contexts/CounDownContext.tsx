import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ChallangesContext } from "./ChallangesContext";

interface CountDownProviderProps {
  children: React.ReactNode;
}

interface CountDownProviderData {
  time: number;
  minutes: number;
  seconds: number;
  isCounting: boolean;
  hasFinished: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

let countDownTimeout: NodeJS.Timeout;

export const CountDownContext = createContext({} as CountDownProviderData);

export function CountDownProvider({ children }: CountDownProviderProps) {
  const [time, setTime] = useState(0.05 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallange } = useContext(ChallangesContext);

  const startCountDown = () => {
    setIsCounting(true);
    setHasFinished(false);
  };

  const resetCountDown = () => {
    clearTimeout(countDownTimeout);

    setTime(0.05 * 60);
    setIsCounting(false);
  };

  useEffect(() => {
    if (isCounting && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isCounting && time === 0) {
      setHasFinished(true);
      setIsCounting(false);

      startNewChallange();
    } else if (!isCounting) {
      resetCountDown();
      setHasFinished(false);
    }
  }, [time, isCounting, hasFinished]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <CountDownContext.Provider
      value={{
        time,
        minutes,
        seconds,
        hasFinished,
        startCountDown,
        resetCountDown,
        isCounting,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
