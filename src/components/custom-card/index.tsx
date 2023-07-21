import { ReactNode } from "react";
import "./index.scss";

type cardProps = {
  width?: string;
  height?: string;
  background?: string;
  children?: ReactNode;
  cover?: string;
};

export default function CustomCard(props: cardProps) {
  const { width = "80px", height = "80px", cover, children } = props;

  let style = {
    width,
    height,
    lineHeight: height,
  };
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
      <div className="custom-card" style={style}>
        <div className="card-text">{children}</div>
      </div>
    </>
  );
}
