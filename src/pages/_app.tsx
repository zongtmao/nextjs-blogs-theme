import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/global.scss";
import "antd/dist/antd";
// import { useRouter } from "next/router";
// import { useEffect } from "react";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // useEffect(() => {
  //   // console.log(router);
  // }, [router]);
  return (
    <>
      <Head>
        <title>M</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
