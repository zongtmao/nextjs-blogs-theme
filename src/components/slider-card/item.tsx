import classes from "./index.module.scss";
import CustomCard from "../custom-card";

type sliderItemProps = {
  isSecond?: boolean;
  cardList?: Array<any>;
};

export default function SliderItem({ cardList, isSecond = false }: sliderItemProps) {
  return (
    <>
      <div className={classes.sliderItem}>
        <div className={`${isSecond ? classes.second : classes.first}`}>
          {cardList!.length &&
            cardList!.map((tag) => {
              return (
                <CustomCard key={tag.title} width={"120px"} height={"120px"} cover={tag.cover}>
                  {tag.title}
                </CustomCard>
              );
            })}
          {cardList!.length &&
            cardList!.map((tag) => {
              return (
                <CustomCard key={tag.title} width={"120px"} height={"120px"} cover={tag.cover}>
                  {tag.title}
                </CustomCard>
              );
            })}
        </div>
      </div>
    </>
  );
}
