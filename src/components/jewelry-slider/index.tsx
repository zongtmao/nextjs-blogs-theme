import classes from "./index.module.scss";
import CustomCard from "../custom-card";
import { sliderItemProps } from "@/type/component.type";

export default function SliderItem({ cardList }: any) {
  if (!cardList?.length) {
    return <>暂无数据</>;
  }

  

  return (
    <>
      <div className={classes.sliderItem}>
        <div className={`${classes.first}`}>
          {cardList!.length &&
            cardList!.map((card: any) => {
              return (
                <CustomCard key={card.id} {...card}>
                  {card.title}
                </CustomCard>
              );
            })}
          {cardList!.length &&
            cardList!.map((card: any) => {
              return (
                <CustomCard key={card.id} {...card}>
                  {card.title}
                </CustomCard>
              );
            })}
        </div>
      </div>
    </>
  );
}
