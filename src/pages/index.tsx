import React from "react";
import { createRef } from "react";
import { Card, Row, Col } from "antd";
import { ScrollTrigger, Tween } from "react-gsap";

import { cardProps, menuProps as typeMenuProps } from "@/type/component.type";
import { getDomHeightById, getScrollTop, getHalfScreenHeight } from "@/utils/hook";
import { mySkillsList } from "../data";

import Menu from "@/components/menu";
import Slider from "@/components/slider-card";
import Footer from "@/components/footer";
import HomeHeader from "@/components/home-header";
import CenterBox from "@/components/center-box";
import HeaderTitle from "@/components/header-title";

type Props = {
  skillsList: [cardProps];
};

const myScrollTo = (id: string) => {
  document.querySelector("#" + id)?.scrollIntoView({ behavior: "smooth" });
};

const menuProps: typeMenuProps = {
  menuList: [
    {
      id: "homeHeader",
      title: "主页",
    },
    {
      id: "skills",
      title: "技能",
    },
    {
      id: "personalWorks",
      title: "作品",
    },
    {
      id: "about",
      title: "关于",
    },
  ],
  bgWhite: false,
  scrollTo: myScrollTo,
};
const domList: Array<string> = menuProps.menuList.map((v) => v.id);

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
    productList: [1, 2, 3, 4, 5, 6, 7] as Array<any>,
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
      list: any = [];

    // 随心记列表
    tagList = Array.isArray(this.props.skillsList) ? this.props.skillsList : [];

    // 需要收集高度滚动的dom列表
    domList.forEach((dom: string, index: number) => {
      list.push({
        id: dom,
        lastScrollHeight: index ? list[index - 1].scrollTopHeight : 0,
        scrollTopHeight: index ? getDomHeightById(dom) + list[index - 1].scrollTopHeight : getDomHeightById(dom),
      });
    });
    this.setState({ allDomObjectList: list, tagList });

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
            <HomeHeader />
          </div>
          {/* 主页第二页 */}
          <CenterBox bgColor="#fff">
            <div id="skills" className="w-[100%] h-[100vh] pt-[60px]">
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
                    <HeaderTitle {...{ title: "技能", size: 36 }} />
                    <Slider cardList={this.state.tagList} cardItemHeight={280}></Slider>
                  </div>
                </Tween>
              </ScrollTrigger>
            </div>
          </CenterBox>
          <CenterBox bgColor="#fff">
            <div id="personalWorks" className="w-[100%] min-h-[100vh] pt-[60px]">
              <ScrollTrigger start="-300px center" end="-200px center" scrub={2}>
                <HeaderTitle {...{ title: "作品", size: 36 }} />
                <Row gutter={[16, 16]}>
                  {Array.isArray(this.state.productList) &&
                    this.state.productList.map((v) => {
                      return (
                        <Tween
                          key={v}
                          from={{
                            y: "200px",
                            opacity: 1,
                          }}
                          to={{
                            y: "0px",
                            opacity: 0.5,
                          }}
                        >
                          <Col xs={12} md={6}>
                            <div className="w-[100%] h-[30vh] bg-slate-500">{v}</div>
                          </Col>
                        </Tween>
                      );
                    })}
                </Row>
              </ScrollTrigger>
            </div>
          </CenterBox>
          <CenterBox>
            <div id="about" className="w-[100%] h-[100vh] bg-transparent pt-[60px] flex flex-col">
              <HeaderTitle {...{ title: "关于", size: 36 }} />
              <Footer />
            </div>
          </CenterBox>
        </div>
      </>
    );
  }
}

// 假装我打包时从后端取的数据 哈哈
export async function getStaticProps() {
  return {
    props: {
      skillsList: mySkillsList,
    },
  };
}

export default Home;
