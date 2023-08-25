import classes from "./index.module.scss";

import { cardProps } from "@/type/component.type";

export default function CustomCard(props: cardProps) {
  const { width = "80px", height = "80px", right = "20px", cover, children, background, color = "#000", backgroundImage, fontSize } = props;

  let style = {
    width,
    height,
    marginRight: right,
    lineHeight: height,
  };
  if (background) {
    Object.assign(style, {
      background,
    });
  }
  if (backgroundImage) {
    Object.assign(style, {
      backgroundImage,
    });
  }
  if (cover) {
    Object.assign(style, {
      backgroundImage: `url(${cover})`,
    });
  } else {
    Object.assign(style, {
      border: "1px solid #f0f0f0",
    });
  }

  return (
    <>
      <div className={classes.customCard} style={style}>
        <div className={classes.cardText} style={{ color, fontSize }}>
          {children}
        </div>
      </div>
    </>
  );
}
