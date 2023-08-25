import { Tween, Reveal } from "react-gsap";
import TypeWriter from "@/components/type-writer";

import { FontBubble } from "./font-bubble";

import { fountBubbleProps } from "@/type/component.type";

export default function HomeHeader(props: { sayingList: Array<string>; frameworkList: Array<fountBubbleProps> }) {
  const { sayingList, frameworkList } = props;
  let writerProps = {
    writerList: sayingList,
    size: "1.5rem",
    id: "homeHeaderWriter",
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:pl-[80px]">
        <Reveal repeat>
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
        </Reveal>
        <Reveal repeat>
          <div className="w-[100%] h-[100vh] md:w-[50%] flex justify-center items-center overflow-hidden md:overflow-visible">
            <Tween
              from={{
                x: "200px",
              }}
              to={{
                x: "0px",
              }}
            >
              <div className="h-[100vh] flex items-center flex-wrap relative ">
                {frameworkList.map((frame) => {
                  return <FontBubble key={frame.id} {...{ id: frame.id, text: frame.text, tClass: frame.tClass }}></FontBubble>;
                })}
              </div>
            </Tween>
          </div>
        </Reveal>
      </div>
    </>
  );
}
