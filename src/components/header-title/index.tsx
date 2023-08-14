import { headerTitleProps } from "@/type/component.type";
import classes from "./index.module.scss";

export default function HeaderTitle(props: headerTitleProps) {
  const { icon, title, size } = props;
  if (!title) {
    console.error("HeaderTitle need a title prop!");
    return;
  }

  const style = {
    fontSize: size ? size + "px" : 16 + "px",
  };

  if (!icon) {
    return (
      <>
        <span className={classes.title} style={style}>
          {title}
        </span>
      </>
    );
  }

  Object.assign(style, { marginLeft: "8px" });

  return (
    <>
      <i className={`iconfont ${icon}`}></i>
      <span className={classes.title} style={style}>
        {title}
      </span>
    </>
  );
}
