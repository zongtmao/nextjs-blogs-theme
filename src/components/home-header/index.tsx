import { Tween, Reveal } from "react-gsap";
import TypeWriter from "@/components/type-writer";
import { useEffect, useState } from "react";

export default function HomeHeader(props: any) {
  const [delayTime, setDelayTime] = useState<number>(0);
  const { sayingList } = props;
  let writerProps = {
    writerList: sayingList,
    size: "1.5rem",
    id: "homeHeaderWriter",
  };

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    let homeRight = document.querySelectorAll("#home-right");
    for (let i = 0; i < homeRight.length; i++) {
      const element = homeRight[i] as any;
      element.style.setProperty("--delay", delay() + "s");
      element.style.setProperty("--x1", translate() + "px");
      element.style.setProperty("--x2", translate() + "px");
      element.style.setProperty("--x3", translate() + "px");
      element.style.setProperty("--x4", translate() + "px");
      element.style.setProperty("--duration", 12 + "s");
    }
  };

  // const changeAnimation = () => {
  //   let homeRight = document.querySelectorAll("#home-right");
  //   for (let i = 0; i < homeRight.length; i++) {
  //     const element = homeRight[i] as any;
  //     element.style.setProperty("--x1", translate() + "px");
  //     element.style.setProperty("--x2", translate() + "s");
  //     element.style.setProperty("--x3", translate() + "s");
  //     element.style.setProperty("--x4", translate() + "s");
  //   }
  // };

  // 位移距离
  const translate = () => {
    let flag = 0;
    flag = Math.round(Math.random() * 6) / 100;
    if (flag > 2) {
      return Math.round(Math.random() * 300);
    } else {
      return 0 - Math.round(Math.random() * 300);
    }
  };

  const delay = () => {
    return Math.round(Math.random() * 12 * 10) / 10;
  };

  return (
    <>
      <Reveal repeat>
        <div className="flex flex-col md:flex-row md:pl-[80px]">
          <div className="w-[100%] h-[100vh] px-[50px] py-[30px] md:w-[50%] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-start w-[90%]">
              <Tween from={{ y: "-50px" }} to={{ y: "0px" }} stagger={0.05} duration={3} ease="elastic.out(2, 0.5)">
                <div className="text-6xl break-keep leading-loose">Hello 👋</div>
                <div className="text-4xl break-keep leading-relaxed">我是 M 😶‍🌫️</div>
                <div className="text-3xl break-keep leading-relaxed">前端开发攻城狮 🦁️</div>
                <div className="h-[60px] mt-[10px]">
                  <TypeWriter {...writerProps} />
                </div>
              </Tween>
            </div>
          </div>
          <Tween
            from={{
              x: "200px",
            }}
            to={{
              x: "0px",
            }}
          >
            <div className="w-[100%] h-[100vh] md:w-[50%] grid place-items-center">
              <div className="w-[100%] h-[100vh] flex items-center flex-wrap relative ">
                <div id="home-right" className="text-rose-300 bg-violet-600 outline-none ring ring-violet-300 text-2xl home-right-text">
                  React.js
                </div>
                <div id="home-right" className="text-pink-300 bg-violet-600 outline-none ring ring-violet-300 text-xl home-right-text">
                  Next.js
                </div>
                <div id="home-right" className="text-fuchsia-300 bg-violet-600 outline-none ring ring-violet-300 text-lg home-right-text">
                  Tailwind.css
                </div>
                <div id="home-right" className="text-purple-300 bg-violet-600 outline-none ring ring-violet-300 text-md home-right-text">
                  React-gsap
                </div>
                <div id="home-right" className="text-indigo-300 bg-violet-600 outline-none ring ring-violet-300 text-sm home-right-text">
                  Gsap
                </div>
                <div id="home-right" className="text-blue-300 bg-violet-600 outline-none ring ring-violet-300 text-3xl home-right-text">
                  sass
                </div>
              </div>
            </div>
          </Tween>
        </div>
      </Reveal>
    </>
  );
}
