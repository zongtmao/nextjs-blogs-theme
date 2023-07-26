import SliderItem from "./item";
import "./index.scss";
import { useEffect, useState } from "react";

type sliderItemProps = {
  cardList: Array<any>;
};

export default function Slider({ cardList }: sliderItemProps) {
  const [arr1, setArr1] = useState<any>([]);
  const [arr2, setArr2] = useState<any>([]);
  const [arr3, setArr3] = useState<any>([]);
  useEffect(() => {
    const arr1: any = [],
      arr2: any = [],
      arr3: any = [];
    cardList.forEach((v, i) => {
      if (i % 3 == 0) {
        arr1.push(v);
      } else if (i % 3 == 1) {
        arr2.push(v);
      } else {
        arr3.push(v);
      }
    });
    setArr1(arr1);
    setArr2(arr2);
    setArr3(arr3);
  }, []);
  return (
    <>
      <div className="slider">
        <SliderItem cardList={arr1} />
        <SliderItem cardList={arr2} isSecond={true} />
        <SliderItem cardList={arr3} />
      </div>
    </>
  );
}
