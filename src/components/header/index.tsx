import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

import { Menu } from "antd";
import type { MenuProps } from "antd";

export interface MenuInfo {
  key: string;
  keyPath: string[];
  /** @deprecated This will not support in future. You should avoid to use this */
  item: React.ReactInstance;
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}

export default function Header() {
  const router = useRouter();

  const menus: MenuProps["items"] = [
    {
      label: "home",
      key: "/",
    },
    {
      label: "文章",
      key: "/article",
    },
  ];

  useEffect(() => {
    setCurrent([router.route]);
  }, [router]);

  const [current, setCurrent] = useState<string[]>([]);

  const goToPath = (val: MenuInfo) => {
    Router.push(val.key);
  };

  return (
    <>
      <Menu onClick={goToPath} selectedKeys={current} mode="horizontal" items={menus}></Menu>
    </>
  );
}
