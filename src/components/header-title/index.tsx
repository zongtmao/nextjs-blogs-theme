import classes from "./index.module.scss";

type HeaderTitleProps = {
  title: string;
  icon?: string;
  size?: number;
};

export default function HeaderTitle(props: HeaderTitleProps) {
  const { icon, title, size } = props;
  if (!title) {
    console.error("HeaderTitle need a title prop!");
    return;
  }

  return (
    <>
      <i className={`iconfont ${icon}`}></i>
      <span className={classes.title} style={{ fontSize: size + "px", marginLeft: icon ? "8px" : "" }}>
        {title}
      </span>
    </>
  );
}
