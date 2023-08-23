import React from "react";
import { createRef } from "react";
import { ScrollTrigger, Tween } from "react-gsap";

import { cardProps, menuProps as typeMenuProps } from "@/type/component.type";
import { getDomHeightById, getScrollTop, getHalfScreenHeight } from "@/utils/hook";
import { mySkillsList, myWorkList, sayingList, footerList } from "../data";

import Menu from "@/components/menu";
import Slider from "@/components/slider-card";
import Footer from "@/components/footer";
import HomeHeader from "@/components/home-header";
import CenterBox from "@/components/center-box";
import HeaderTitle from "@/components/header-title";
import WorkList from "@/components/work-list";

const myScrollTo = (id: string) => {
  document.querySelector("#" + id)?.scrollIntoView({ behavior: "smooth" });
};

const menuProps: typeMenuProps = {
  menuList: [
    {
      id: "homeHeader",
      title: "Home",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "personalWorks",
      title: "Works",
    },
    {
      id: "about",
      title: "About",
    },
  ],
  bgWhite: false,
  scrollTo: myScrollTo,
};
const domList: Array<string> = menuProps.menuList.map((v) => v.id);

class Home extends React.Component<any, any> {
  menuRef: React.RefObject<any>;
  timer: any;

  constructor(props: any) {
    super(props);
    this.menuRef = createRef<any>();
    this.timer = null;
  }
  state = {
    tagList: [],
    all: [],
    menuProps: menuProps,
    allDomObjectList: [] as Array<any>,
    workList: [] as Array<any>,
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
        bgWhite: getScrollTop() >= 100 ? true : false,
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
      workList: Array<any> = [],
      list: any = [];

    // 技能列表
    tagList = Array.isArray(mySkillsList) ? mySkillsList : [];

    // 作品列表
    workList = Array.isArray(myWorkList) ? myWorkList : [];

    // 需要收集高度滚动的dom列表
    domList.forEach((dom: string, index: number) => {
      list.push({
        id: dom,
        lastScrollHeight: index ? list[index - 1].scrollTopHeight : 0,
        scrollTopHeight: index ? getDomHeightById(dom) + list[index - 1].scrollTopHeight : getDomHeightById(dom),
      });
    });
    this.setState({ allDomObjectList: list, tagList, workList });

    // 初始化设置菜单背景
    this.scrollListener();
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
            <HomeHeader {...{ sayingList }} />
          </div>
          {/* 主页第二页 */}
          <CenterBox bgColor="#fff">
            <div id="skills" className="w-[100%] h-[100vh] pt-[60px]">
              <ScrollTrigger start="-200px center" end="0px center" scrub={2}>
                <Tween
                  from={{
                    x: "200px",
                  }}
                  to={{
                    x: "0px",
                  }}
                >
                  <div>
                    <HeaderTitle {...{ title: "Skills", size: 36 }} />
                    <Slider cardList={this.state.tagList} cardItemHeight={280}></Slider>
                  </div>
                </Tween>
              </ScrollTrigger>
            </div>
          </CenterBox>
          <CenterBox bgColor="#fff">
            <div id="personalWorks" className="w-[100%] min-h-[100vh] pt-[60px]">
              <HeaderTitle {...{ title: "Works", size: 36 }} />
              <WorkList workList={this.state.workList} />
            </div>
          </CenterBox>
          <CenterBox>
            <div id="about" className="w-[100%]  bg-transparent pt-[60px] flex flex-col">
              <HeaderTitle {...{ title: "About", size: 36, color: "rgb(148 163 184)" }} />
              <Footer {...{ footerList }} />
            </div>
          </CenterBox>
        </div>
      </>
    );
  }
}

export default Home;
