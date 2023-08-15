import { createRef, useEffect, useRef, useState } from "react";
import { Card, Row, Col } from "antd";

import { cardProps, menuProps as typeMenuProps } from "@/type/component.type";
import { getDomHeightById, getScrollTop } from "@/utils/hook";

import Menu from "@/components/menu";
import Slider from "@/components/slider-card";
import Footer from "@/components/footer";
import HomeHeader from "@/components/home-header";
import CenterBox from "@/components/center-box";
import React from "react";

type Props = {
  hobbyList: [cardProps];
};

const myScrollTo = (id: string) => {
  document.querySelector("#" + id)?.scrollIntoView({ behavior: "smooth" });
};

const domList: Array<string> = ["homeHeader", "slider", "other"];

const menuProps: typeMenuProps = {
  menuList: [
    {
      id: "homeHeader",
      title: "主页",
    },
    {
      id: "slider",
      title: "随心记",
    },
    {
      id: "other",
      title: "其他",
    },
  ],
  menuBlur: false,
  scrollTo: myScrollTo,
};

class Home extends React.Component<Props> {
  menuRef: React.RefObject<any>;

  constructor(props: Props) {
    super(props);
    this.menuRef = createRef<any>();
  }
  state = {
    tagList: [],
    allDomObject: [],
    menuProps: menuProps,
  };

  setActive = () => {
    this.menuRef?.current?.setMyActive(1);
  };

  scrollListener = () => {
    const h = getScrollTop(); // 滚动高度
    this.setState(
      Object.assign(this.state, {
        menuProps: {
          ...menuProps,
          menuBlur: h >= 80 ? true : false,
        },
      })
    );
  };

  // 添加滚动事件

  componentDidMount(): void {
    let tagList: Array<cardProps> = [],
      list: any = [];

    tagList = Array.isArray(this.props.hobbyList)
      ? this.props.hobbyList.map((v: any) => {
          return {
            id: v.id,
            title: v.name,
          };
        })
      : [];

    domList.forEach((dom: string, index: number) => {
      list.push({
        id: dom,
        scrollTopHeight: index ? getDomHeightById(dom) + list[index - 1].scrollTopHeight : getDomHeightById(dom),
      });
    });
    this.setState(Object.assign(this.state, { allDomObject: list, tagList }));

    window.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.scrollListener);
  }

  render() {
    return (
      <>
        <div className="main_box">
          <Menu {...this.state.menuProps} ref={this.menuRef}></Menu>
          {/* 主页第一页 */}
          <div id="homeHeader">
            <HomeHeader />
          </div>
          {/* 主页第二页 */}
          <CenterBox>
            <div id="slider">
              <Slider cardList={this.state.tagList} headerTitleProps={{ title: "随心记", size: 28 }}></Slider>
            </div>
            <div id="other" className="w-[100%] h-[100vh] bg-slate-400"></div>
            <div className="w-[100%] h-[100vh] bg-slate-500"></div>
            <div className="w-[100%] h-[100vh] bg-transparent"></div>
          </CenterBox>
          <CenterBox>
            <div className="w-[100%] h-[100vh] bg-transparent"></div>
          </CenterBox>
          <Footer />
        </div>
      </>
    );
  }
}

export async function getStaticProps() {
  let res: any = [
    {
      id: 1,
      name: "篮球",
    },
    {
      id: 2,
      name: "乒乓球",
    },
    {
      id: 3,
      name: "足球",
    },
    {
      id: 4,
      name: "Coding",
    },
    {
      id: 5,
      name: "吃饭",
    },
    {
      id: 6,
      name: "游泳",
    },
    {
      id: 7,
      name: "烧烤",
    },
    {
      id: 8,
      name: "啤酒",
    },
    {
      id: 9,
      name: "Vue",
    },
    {
      id: 10,
      name: "React",
    },
    {
      id: 11,
      name: "React",
    },
    {
      id: 12,
      name: "React",
    },
    {
      id: 13,
      name: "React",
    },
    {
      id: 14,
      name: "React",
    },
  ];
  // await fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     res = json;
  //   });
  return {
    props: {
      hobbyList: res,
    },
  };
}

export default Home;
