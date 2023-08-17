import SliderItem from "./item";
import classes from "./index.module.scss";
import { useEffect, useState } from "react";
import { slider } from "@/type/component.type";

export default function Slider({ cardList, cardItemHeight }: slider) {
  const [arr1, setArr1] = useState<any>([]);
  const [arr2, setArr2] = useState<any>([]);
  useEffect(() => {
    if (cardList.length) {
      const arr1: any = [],
        arr2: any = [];
      cardList.forEach((v, i) => {
        if (i % 2 == 0) {
          arr1.push(v);
        } else if (i % 2 == 1) {
          arr2.push(v);
        }
      });
      // 如果第二行数量不等于第一行，就用第一行的数据来补齐第二行
      if (arr1.length != arr2.length) {
        arr2.push(arr1[0]);
      }
      setArr1(arr1);
      setArr2(arr2);
    }
  }, [cardList]);

  return (
    <>
      <div className={classes.slider}>
        <SliderItem cardList={arr1} height={cardItemHeight} />
        <SliderItem cardList={arr2} height={cardItemHeight} isSecond={true} />
      </div>
    </>
  );
}
