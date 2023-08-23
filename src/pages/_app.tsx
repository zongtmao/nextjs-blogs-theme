import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/global.scss";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [title, setTitle] = useState<string>("M-blog");

  useEffect(() => {
    // 监听 visibility change 事件
    document.addEventListener("visibilitychange", function () {
      let isHidden = document.hidden;

      // 页面变为不可见时触发
      if (isHidden) {
        setTitle("我在这里等你回来");
      } else {
        setTitle("M-blog");
      }
    });

    window.onblur = function () {
      setTitle("我在这里等你回来");
    };
    window.onfocus = function () {
      setTitle("M-blog");
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
