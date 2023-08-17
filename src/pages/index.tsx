import React from "react";
import { createRef, useEffect } from "react";
import { Card, Row, Col } from "antd";
import { ScrollTrigger, Tween } from "react-gsap";

import { cardProps, menuProps as typeMenuProps } from "@/type/component.type";
import { getDomHeightById, getScrollTop, getHalfScreenHeight } from "@/utils/hook";

import Menu from "@/components/menu";
import Slider from "@/components/slider-card";
import Footer from "@/components/footer";
import HomeHeader from "@/components/home-header";
import CenterBox from "@/components/center-box";
import HeaderTitle from "@/components/header-title";

type Props = {
  hobbyList: [cardProps];
};

const myScrollTo = (id: string) => {
  document.querySelector("#" + id)?.scrollIntoView({ behavior: "smooth" });
};

const domList: Array<string> = ["homeHeader", "slider", "other", "bottom"];

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
    {
      id: "bottom",
      title: "底部",
    },
  ],
  bgWhite: false,
  scrollTo: myScrollTo,
};

class Home extends React.Component<Props, any> {
  menuRef: React.RefObject<any>;
  timer: any;

  constructor(props: Props) {
    super(props);
    this.menuRef = createRef<any>();
    this.timer = null;
  }
  state = {
    tagList: [],
    all: [],
    menuProps: menuProps,
    allDomObjectList: [] as Array<any>,
  };

  // 设置菜单高亮
  setActive = (index: number) => {
    this.menuRef?.current?.setMyActive(index);
  };

  scrollListener = () => {
    const h = getScrollTop() + getHalfScreenHeight(); // 滚动高度 + 屏幕的一半高度 这样可以更好的在滚动时高亮菜单

    this.setState({
      menuProps: {
        ...menuProps,
        bgWhite: h >= 100 ? true : false,
      },
    });

    if (this.timer) {
      clearTimeout(this.timer);
    }

    // 做一个防抖
    this.timer = setTimeout(() => {
      this.state.allDomObjectList.forEach((v, index) => {
        if (h >= v.lastScrollHeight && h < v.scrollTopHeight) {
          this.setActive(index);
        }
      });
    }, 20);
  };

  componentDidMount(): void {
    let tagList: Array<cardProps> = [],
      list: any = [];

    // 随心记列表
    tagList = Array.isArray(this.props.hobbyList)
      ? this.props.hobbyList.map((v: any) => {
          return {
            id: v.id,
            title: v.name,
          };
        })
      : [];

    // 需要收集高度滚动的dom列表
    domList.forEach((dom: string, index: number) => {
      list.push({
        id: dom,
        lastScrollHeight: index ? list[index - 1].scrollTopHeight : 0,
        scrollTopHeight: index ? getDomHeightById(dom) + list[index - 1].scrollTopHeight : getDomHeightById(dom),
      });
    });
    this.setState({ allDomObjectList: list, tagList });

    // 添加滚动事件
    window.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount(): void {
    // 移除timer
    clearTimeout(this.timer);
    this.timer = null;
    // 移除滚动事件
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
          <CenterBox bgColor="#fff">
            <div id="slider" className="w-[100%] h-[100vh] pt-[60px]">
              <ScrollTrigger start="-200px center" end="0px center" scrub={2}>
                <Tween
                  from={{
                    x: "-200px",
                  }}
                  to={{
                    x: "0px",
                  }}
                >
                  <div>
                    <Slider cardList={this.state.tagList} headerTitleProps={{ title: "随心记", size: 28 }}></Slider>
                  </div>
                </Tween>
              </ScrollTrigger>
            </div>
            <div id="other" className="w-[100%] h-[100vh] bg-slate-300 pt-[60px]">
              <HeaderTitle title="other" />
            </div>
          </CenterBox>
          <CenterBox>
            <div id="bottom" className="w-[100%] h-[100vh] bg-transparent pt-[60px]">
              <HeaderTitle title="bottom" />
              <Footer />
            </div>
          </CenterBox>
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
