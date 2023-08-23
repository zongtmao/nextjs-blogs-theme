import { Tween } from "react-gsap";
import TypeWriter from "@/components/type-writer";

export default function HomeHeader(props: any) {
  const { sayingList } = props;
  let writerProps = {
    writerList: sayingList,
    size: "1.5rem",
  };
  return (
    <>
      <div className="flex flex-col md:flex-row px-[80px]">
        <div className="w-[100%] h-[50vh] px-[50px] py-[30px] md:w-[50%] md:h-[100vh] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start w-[90%]">
            <Tween from={{ y: "-50px" }} to={{ y: "0px" }} stagger={0.05} duration={3} ease="elastic.out(2, 0.5)">
              <div className="text-6xl break-keep leading-loose">Hello 👋</div>
              <div className="text-3xl break-keep leading-relaxed">我是 M 🐱</div>
              <div className="text-3xl break-keep leading-relaxed">一名前端开发攻城狮 🦁️</div>
              <div className="h-[80px] mt-[10px]">
                <TypeWriter {...writerProps} />
              </div>
            </Tween>
          </div>
        </div>
        <Tween
          from={{
            x: "-200px",
          }}
          to={{
            x: "0px",
          }}
        >
          <div className="w-[100%] h-[50vh] md:w-[50%] md:h-[100vh]  grid place-items-center">暂定一个时钟动画</div>
        </Tween>
      </div>
    </>
  );
}
