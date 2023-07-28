import SliderItem from "./item";
import "./index.scss";
import { useEffect, useState } from "react";

type sliderItemProps = {
  cardList: Array<any>;
};

export default function Slider({ cardList }: sliderItemProps) {
  const [arr1, setArr1] = useState<any>([]);
  const [arr2, setArr2] = useState<any>([]);
  useEffect(() => {
    const arr1: any = [],
      arr2: any = [];
    cardList.forEach((v, i) => {
      if (i % 2 == 0) {
        arr1.push(v);
      } else if (i % 2 == 1) {
        arr2.push(v);
      }
    });
    setArr1(arr1);
    setArr2(arr2);
  }, [cardList]);
  return (
    <>
      <div className="slider">
        <SliderItem cardList={arr1} />
        <SliderItem cardList={arr2} isSecond={true} />
      </div>
    </>
  );
}
