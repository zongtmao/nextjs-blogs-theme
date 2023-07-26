import { Card, Row, Col, Carousel } from "antd";
import CustomCard from "@/components/custom-card";
import Slider from "@/components/slider-card";
import "./index.scss";
import { useEffect, useRef } from "react";

export default function Home() {
  const tagList = [
    {
      title: "Vue",
      cover: "",
    },
    {
      title: "Ts",
      cover: "",
    },
    {
      title: "React",
      cover: "https://p3-passport.byteimg.com/img/user-avatar/3a2e98873c71e5f395dabcff50622478~100x100.awebp",
    },
    {
      title: "JS",
      cover: "",
    },
    {
      title: "Java",
      cover: "",
    },
    {
      title: "linux",
    },
    {
      title: "shell",
    },
    {
      title: "node",
    },
    {
      title: "koa",
    },
    {
      title: "pm2",
    },
    {
      title: "npm",
    },
    {
      title: "pnpm",
    },
  ];

  useEffect(() => {}, []);

  return (
    <>
      <div className="main_box">
        <div className="home">
          <Row gutter={[16, 16]}>
            {/* <Col span={24}>
              <Carousel className="carousel w-[100%] h-[300px]">
                <div className="w-[100%] h-[300px] text-center bg-black text-white">hhhh1</div>
                <div className="w-[100%] h-[300px] text-center bg-black  text-white">hhhh2</div>
                <div className="w-[100%] h-[300px] text-center bg-black  text-white">hhhh3s</div>
              </Carousel>
            </Col> */}
            <Col xs={24} md={12}>
              <Card hoverable>
                <div className="h-[200px] bg-slate-50"></div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <div className="flex justify-around">
                <Slider cardList={tagList}></Slider>
                {/* {tagList.map((tag) => {
                  return (
                    <div key={tag.title} className="flex justify-center items-center">
                      <CustomCard width={"90px"} height={"90px"} cover={tag.cover}>
                        {tag.title}
                      </CustomCard>
                    </div>
                  );
                })} */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
