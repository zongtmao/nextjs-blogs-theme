import { Card, Row, Col } from "antd";
import Slider from "@/components/slider-card";
import Footer from "@/components/footer";
import { createRef, useEffect, useRef, useState } from "react";
import { cardProps } from "@/type/component.type";
import HomeHeader from "@/components/home-header";
import CenterBox from "@/components/center-box";
import Menu from "@/components/menu";

type Props = {
  hobbyList: [cardProps];
};

const myScrollTo = (id: string) => {
  document.querySelector("#" + id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Home(props: Props) {
  const [tagList, setTagList] = useState<Array<cardProps>>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const menuRef = createRef();

  const { hobbyList }: any = props;
  const menuProps = {
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
    scrollTo: myScrollTo,
  };

  const setActive = () => {
    // menuRef?.current?.setMyActive(1);
  };

  useEffect(() => {
    setTagList(
      Array.isArray(hobbyList)
        ? hobbyList.map((v: any) => {
            return {
              id: v.id,
              title: v.name,
            };
          })
        : []
    );
  }, []);

  return (
    <>
      <div className="main_box">
        <Menu {...menuProps} ref={menuRef}></Menu>
        {/* 主页第一页 */}
        <div id="homeHeader">
          <HomeHeader />
        </div>
        <div onClick={setActive}>hhh</div>

        {/* 主页第二页 */}
        <CenterBox>
          <div id="slider">
            <Slider cardList={tagList} headerTitleProps={{ title: "随心记", size: 28 }}></Slider>
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
