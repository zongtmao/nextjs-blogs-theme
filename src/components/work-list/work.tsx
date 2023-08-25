import Image from "next/image";
import classes from "./index.module.scss";
import { useEffect, useState } from "react";

import { work, workProps } from "@/type/component.type";

export default function Work({ list, width, id }: workProps) {
  // let current = 0;
  // let box: Element | null = null,
  //   observer: IntersectionObserver | null = null;
  const [arr, setArr] = useState<Array<work>>([]);

  // const addWork = () => {
  //   setArr((arr) => {
  //     return [...arr, list[current]];
  //   });
  // };
  // // 无限加载
  // const observeBox = () => {
  //   // 获取要监听的元素
  //   box = document.getElementById("observer");

  //   observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach(async (e) => {
  //         if (e.isIntersecting && e.intersectionRatio > 0) {
  //           console.log(2);

  //           if (arr.length < list.length) {
  //             current++;
  //             addWork();
  //           } else {
  //             box && observer?.unobserve(box);
  //             observer == null;
  //           }
  //         }
  //       });
  //     },
  //     { threshold: [1] }
  //   );
  //   box && observer.observe(box);
  // };

  useEffect(() => {
    setArr(list);
  }, [list]);

  const goBlank = (url: string | undefined) => {
    if (url) {
      window.open(url);
    }
  };

  if (!arr.length) {
    return;
  }

  return (
    <>
      <div id={id} className={`${width} h-auto`}>
        {arr.map((work) => {
          return (
            <div key={work.id} className={`${classes.workCard} mb-[8px] md:mb-[20px]`} onClick={() => goBlank(work.onlineAddress)}>
              <div className="grid place-items-center w-[100%] h-[120px] sm:h-[200px]">
                <Image className="w-[100%] h-[120px] sm:h-[200px]" src={work.cover} alt={work.workName} width={800} height={100} priority={true} />
              </div>
              <div className={classes.cardBody}>
                <div className="text-md text-left w-[100%] font-semibold">{work.workName}</div>
                <div className="text-sm text-left mt-[10px]">{work.description}</div>
                <div className="mt-[10px] text-left w-[100%] text-xs">
                  {Array.isArray(work.tag) && work.tag.length
                    ? work.tag.map((t: any) => {
                        return (
                          <button key={t} className="text-xs bg-violet-500  hover:bg-violet-600 outline-none ring ring-violet-200 rounded-3xl text-white m-[3px] p-[5px]">
                            {t}
                          </button>
                        );
                      })
                    : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div id="observer"></div> */}
    </>
  );
}
