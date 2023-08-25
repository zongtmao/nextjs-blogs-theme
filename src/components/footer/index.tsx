import { ScrollTrigger, Tween, SplitChars } from "react-gsap";

import { footerProps } from "@/type/component.type";

export default function Footer({ color = "rgb(148 163 184)", footerList = [] }: footerProps) {
  const goBlank = (url: string | undefined) => {
    if (url) {
      window.open(url);
    }
  };
  return (
    <>
      <ScrollTrigger start="-500px center" end="-300px center" scrub={2}>
        <div className="flex flex-col px-[1px] justify-between rounded-lg ">
          <div className="w-[100%] min-h-[60vh] rounded-lg  flex justify-around flex-col md:flex-row">
            {footerList.map((footer) => {
              return (
                <Tween
                  key={footer.title}
                  from={{
                    y: "220px",
                  }}
                  to={{
                    y: "0px",
                  }}
                  duration={3}
                >
                  <ul style={{ color }} className="mt-[10px]">
                    <div className="text-2xl leading-loose whitespace-pre">{footer.title}</div>
                    <div className="flex flex-wrap">
                      {footer.list.map((l) => {
                        return (
                          <li onClick={() => goBlank(l.url)} key={l.id} className="leading-relaxed mb-[8px]">
                            {l.url ? (
                              <button className="whitespace-pre bg-violet-500 hover:bg-violet-600 hover:outline-none hover:ring hover:ring-violet-300 rounded-3xl text-white py-[5px] px-[25px] m-[5px]"> {l.title}</button>
                            ) : (
                              <button className="whitespace-pre bg-violet-500  rounded-3xl text-white py-[5px] px-[25px] m-[5px]"> {l.title}</button>
                            )}
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                </Tween>
              );
            })}
          </div>
          <div className="w-[100%] flex h-[30vh] justify-center items-center text-3xl">
            <Tween from={{ x: "100px" }} stagger={0.3}>
              <SplitChars wrapper={<div style={{ display: "inline-block", fontSize: "36px", color }} />}>今天又是美好的一天</SplitChars>
            </Tween>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
