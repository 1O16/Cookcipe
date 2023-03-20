import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Header from "../components/Header";
import { global } from "../styles/global";
import { useState } from "react";
import { authService } from "../services/fbase";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isLogin, setIsLogin] = useState(authService.currentUser);
  console.log(isLogin);
  return (
    <>
      <Header />
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
