import { useEffect } from "react";
import classes from "./index.module.scss";

type typeWriterProps = {
  id?: string;
  writerList: Array<string>; // 打印文字列表
  timeSpace?: number; // 句子与句子之间的播放间隔
  wordPrintTime?: number; // 一个字打印的时间长度
  size?: string; // 字体大小
  color?: string; //字体颜色
};

export default function TypeWriter({ id = "writer", writerList = [], timeSpace = 0.8, wordPrintTime = 0.3, size = "1em", color }: typeWriterProps) {
  let arr: Array<NodeJS.Timeout> = [];
  useEffect(() => {
    if (!writerList.length) return;
    print();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [writerList]);

  const print = () => {
    let lastTime = 0;
    let loopList = [] as Array<any>;
    writerList.forEach((v, index) => {
      if (!v.length) {
        console.error(`第${index + 1}条语句为空，不能打印`);
        return;
      }
      if (v.length < 3) {
        console.error(`第${index + 1}条语句字数太少，最少三个字`);
        return;
      }
      let loop = {
        target: v,
        delay: lastTime,
      };
      loopList.push(loop);
      // 计算这一句播放的时间，用于下一句的播放
      lastTime = Math.round((lastTime + v.length * wordPrintTime + timeSpace) * 10) / 10;
    });

    loopList.forEach((loop, index) => {
      let timer: NodeJS.Timeout = setTimeout(() => {
        const writers = document.getElementById(id);
        let num = 0,
          str = "";
        let interTimer: any = setInterval(() => {
          str += loop.target.charAt(num);
          writers!.innerHTML = str;
          if (num < loop.target.length) {
            num++;
          } else {
            clearInterval(interTimer);
            interTimer = null;
          }
        }, wordPrintTime * 1000);
        if (index == loopList.length - 1) {
          arr.forEach((v) => {
            clearTimeout(v);
          });
        }
      }, loop.delay * 1000);
      arr.push(timer);
    });
  };

  return (
    <>
      <div style={{ color, fontSize: size }} className={classes.typeWriter}>
        <span id={id}></span>
        <span className={classes.space}>|</span>
      </div>
    </>
  );
}
