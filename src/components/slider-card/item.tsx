import classes from "./index.module.scss";
import CustomCard from "../custom-card";
import { sliderItemProps } from "@/type/component.type";

export default function SliderItem({ cardList, isSecond = false }: sliderItemProps) {
  if (!cardList?.length) {
    return <>暂无数据</>;
  }
  return (
    <>
      <div className={classes.sliderItem}>
        <div className={`${isSecond ? classes.second : classes.first}`}>
          {cardList!.length &&
            cardList!.map((tag) => {
              return (
                <CustomCard key={tag.id} width={"160px"} height={"160px"} cover={tag.cover}>
                  {tag.title}
                </CustomCard>
              );
            })}
          {cardList!.length &&
            cardList!.map((tag) => {
              return (
                <CustomCard key={tag.id} width={"160px"} height={"160px"} cover={tag.cover}>
                  {tag.title}
                </CustomCard>
              );
            })}
        </div>
      </div>
    </>
  );
}
