import { menuProps } from "@/type/component.type";
import classes from "./menu.module.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

const Menu = forwardRef((props: menuProps, menuRef: any) => {
  const { menuList, bgWhite, scrollTo } = props;
  const [active, setActive] = useState<number>(0);

  const setMyActive = (index: number) => {
    setActive(index);
  };

  useEffect(() => {
    console.log(bgWhite);
  }, [bgWhite]);

  useImperativeHandle(menuRef, () => ({ setMyActive }));

  return (
    <>
      <div className={classes.menuBg}>
        <div className={`${classes.mask}`}></div>
        <div className={`${bgWhite ? classes.bgWhite : ""}`}></div>
        <ul className={classes.menuBox}>
          {menuList.map((m, index) => {
            return (
              <li
                className={`${classes.menuItem} ${active == index ? classes.active : ""}`}
                key={m.id}
                onClick={() => {
                  scrollTo(m.id);
                  setActive(index);
                }}
              >
                {m.title}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
});

Menu.displayName = "Menu";

export default Menu;
