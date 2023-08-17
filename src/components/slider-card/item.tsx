import classes from "./index.module.scss";
import CustomCard from "../custom-card";
import { sliderItemProps } from "@/type/component.type";

export default function SliderItem({ cardList, isSecond = false, height }: sliderItemProps) {
  if (!cardList?.length) {
    return <>暂无数据</>;
  }
  const cardHeight = height ? height - 18 + "px" : 180 + "px";
  const left = height ? height / 2 : 90;
  return (
    <>
      <div className={classes.sliderItem} style={{ height: height + "px" }}>
        <div className={`${classes.first}`} style={{ left: `${isSecond ? 0 - left + "px" : ""}` }}>
          {cardList!.length &&
            cardList!.map((card) => {
              return (
                <CustomCard key={card.id} width={cardHeight} height={cardHeight} {...card}>
                  {card.title}
                </CustomCard>
              );
            })}
          {cardList!.length &&
            cardList!.map((card) => {
              return (
                <CustomCard key={card.id} width={cardHeight} height={cardHeight} {...card}>
                  {card.title}
                </CustomCard>
              );
            })}
        </div>
      </div>
    </>
  );
}
