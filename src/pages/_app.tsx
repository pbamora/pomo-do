import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import { AppProvider } from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
