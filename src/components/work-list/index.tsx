import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollTrigger, Tween } from "react-gsap";

import classes from "./index.module.scss";

type Work = {
  id: number;
  workName: string;
  onlineAddress?: string;
  codeAddress: string;
  description: string;
  tag: Array<string>;
  cover: string;
};

export default function WorkList({ workList }: Record<string, Array<Work>>) {
  let waterArr1: any = [],
    waterArr2: any = [],
    waterArr3: any = [];
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [arr1, setArr1] = useState<Array<any>>([]);
  const [arr2, setArr2] = useState<Array<any>>([]);
  const [arr3, setArr3] = useState<Array<any>>([]);
  let observer: IntersectionObserver | null, box: HTMLElement | null, timer: any;
  const [param, setParam] = useState<any>({
    current: 1,
    size: 3,
  });

  const clear = () => {
    setParam({
      current: 1,
      size: 3,
    });
  };
  const changeWindow = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // 如果是resize事件就清空数据
      clear();
      setScreenWidth(document.body.clientWidth);

      // initWaterfall();
    }, 80);
  };

  const initWaterfall = () => {
    if (screenWidth > 769) {
      setParam({
        current: param.current,
        size: 3,
      });
    } else {
      setParam({
        current: param.current,
        size: 2,
      });
    }

    if (!workList.length) return;

    let list = workList.slice((param.current - 1) * param.size, param.current * param.size);

    waterArr1 = arr1;
    waterArr2 = arr2;
    waterArr3 = arr3;

    // pc
    if (screenWidth > 768) {
      list.forEach((v) => {
        let h1 = document.getElementById("arr1");
        let h2 = document.getElementById("arr2");
        let h3 = document.getElementById("arr3");
        if (param.current == 1) {
          if (!waterArr1.length) {
            waterArr1.push(v);
          } else if (!waterArr2.length) {
            waterArr2.push(v);
          } else {
            waterArr3.push(v);
          }
        } else {
          if (h1!.offsetHeight <= h2!.offsetHeight && h1!.offsetHeight <= h3!.offsetHeight) {
            waterArr1.push(v);
          } else if (h1!.offsetHeight >= h2!.offsetHeight && h2!.offsetHeight <= h3!.offsetHeight) {
            waterArr2.push(v);
          } else {
            waterArr3.push(v);
          }
        }
      });
    } else {
      list.forEach((v) => {
        let h1 = document.getElementById("arr1");
        let h2 = document.getElementById("arr2");
        if (param.current == 1) {
          if (!waterArr1.length) {
            waterArr1.push(v);
          } else {
            waterArr2.push(v);
          }
        } else {
          if (h1!.offsetHeight <= h2!.offsetHeight) {
            waterArr1.push(v);
          } else {
            waterArr2.push(v);
          }
        }
      });
    }
    setArr1(waterArr1);
    setArr2(waterArr2);
    setArr2(waterArr3);

    if (waterArr1.length + waterArr2.length + waterArr3.length < workList.length) {
      observeBox();
    } else {
      box && observer && observer.unobserve(box);
      observer = null;
    }
  };

  // 无限加载
  const observeBox = () => {
    // 获取要监听的元素
    box = document.getElementById("observer");

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (e) => {
          if (e.isIntersecting && e.intersectionRatio > 0) {
            setParam({
              current: param.current++,
              size: param.size,
            });
            initWaterfall();
          }
        });
      },
      { threshold: [1] }
    );
    box && observer.observe(box);
  };

  useEffect(() => {
    setScreenWidth(document.body.clientWidth);

    initWaterfall();
    window.addEventListener("resize", changeWindow);
  }, [workList]);

  return (
    <>
      <ScrollTrigger start="-300px center" end="-200px center" scrub={2}>
        <Tween
          from={{
            y: "200px",
          }}
          to={{
            y: "0px",
          }}
        >
          <div className="flex justify-around items-start w-[100%]">
            <div id="arr1" className={`${screenWidth > 798 ? "w-[30%]" : "w-[48%]"} h-auto`}>
              {arr1.length
                ? arr1.map((work: any) => {
                    return (
                      <div key={work.id} className={classes.workCard}>
                        <div className="grid place-items-center w-[100%] h-[200px]">
                          <Image src={work.cover} alt={work.workName} width={800} height={100} loading="lazy" />
                        </div>
                        <div className={classes.cardBody}>
                          <div className="text-2xl text-left w-[60%]">{work.workName}</div>
                          <div className="text-md text-left mt-[10px]">{work.description}</div>
                          <div className="mt-[10px] text-left w-[100%] text-xs">
                            {Array.isArray(work.tag) && work.tag.length
                              ? work.tag.map((t: any) => {
                                  return (
                                    <button key={t} className="bg-violet-500  rounded-3xl text-white m-[3px] p-[5px]">
                                      {t}
                                    </button>
                                  );
                                })
                              : ""}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div id="arr2" className={`${screenWidth > 798 ? "w-[30%]" : "w-[48%]"} h-auto`}>
              {arr2.length
                ? arr2.map((work: any) => {
                    return (
                      <div key={work.id} className={classes.workCard}>
                        <div className="grid place-items-center w-[100%] h-[200px]">
                          <Image src={work.cover} alt={work.workName} width={800} height={100} loading="lazy" />
                        </div>
                        <div className={classes.cardBody}>
                          <div className="text-2xl text-left w-[60%]">{work.workName}</div>
                          <div className="text-md text-left mt-[10px]">{work.description}</div>
                          <div className="mt-[10px] text-left w-[100%] text-xs ">
                            {Array.isArray(work.tag) && work.tag.length
                              ? work.tag.map((t: any) => {
                                  return (
                                    <button key={t} className="bg-violet-500  rounded-3xl text-white m-[3px] p-[5px]">
                                      {t}
                                    </button>
                                  );
                                })
                              : ""}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div id="arr3" className={`${screenWidth > 798 ? "w-[30%]" : "hidden"} h-auto`}>
              {arr3.length
                ? arr3.map((work: any) => {
                    return (
                      <div key={work.id} className={classes.workCard}>
                        <div className="grid place-items-center w-[100%] h-[200px]">
                          <Image src={work.cover} alt={work.workName} width={800} height={100} loading="lazy" />
                        </div>
                        <div className={classes.cardBody}>
                          <div className="text-2xl text-left w-[60%]">{work.workName}</div>
                          <div className="text-md text-left mt-[10px]">{work.description}</div>
                          <div className="mt-[10px] text-left w-[100%] text-xs ">
                            {Array.isArray(work.tag) && work.tag.length
                              ? work.tag.map((t: any) => {
                                  return (
                                    <button key={t} className="bg-violet-500  rounded-3xl text-white m-[3px] p-[5px]">
                                      {t}
                                    </button>
                                  );
                                })
                              : ""}
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div id="observer"></div>
        </Tween>
      </ScrollTrigger>
    </>
  );
}
