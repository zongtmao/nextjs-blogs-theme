import "./index.scss";
import CustomCard from "../custom-card";

type sliderItemProps = {
  isSecond?: boolean;
  cardList?: Array<any>;
};

export default function SliderItem({ cardList, isSecond = false }: sliderItemProps) {
  return (
    <>
      <div className="slider-item">
        <div className={`slider-item__main ${isSecond ? "second-first" : "other-first"}`}>
          {cardList!.length &&
            cardList!.map((tag) => {
              return (
                <CustomCard key={tag.title} width={"90px"} height={"90px"} cover={tag.cover}>
                  {tag.title}
                </CustomCard>
              );
            })}
        </div>
        <div className={`slider-item__main ${isSecond ? "second-first" : "other-first"}`}>
          {cardList!.length &&
            cardList!.map((tag) => {
              return (
                <CustomCard key={tag.title} width={"90px"} height={"90px"} cover={tag.cover}>
                  {tag.title}
                </CustomCard>
              );
            })}
        </div>
      </div>
    </>
  );
}
