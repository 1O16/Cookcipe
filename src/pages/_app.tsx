import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Header from "../components/Header";
import { global } from "../styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
