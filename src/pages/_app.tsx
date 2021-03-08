import { AppProps } from "next/app";
import { SideBarProvider } from "../contexts/SidebarContext";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SideBarProvider>
      <Component {...pageProps} />
    </SideBarProvider>
  );
}

export default MyApp;
