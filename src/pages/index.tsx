import { Card, Row, Col } from "antd";
import Slider from "@/components/slider-card";
import "./index.scss";
import { useEffect } from "react";

export default function Home() {
  const tagList = [
    {
      title: "Vue",
      cover: "http://img.mrzym.top/Fr8-ZW07pZEvq2uwcfFJunxkTcLE",
    },
    {
      title: "Ts",
      cover: "http://img.mrzym.top/Fr8-ZW07pZEvq2uwcfFJunxkTcLE",
    },
    {
      title: "React",
      cover: "https://p3-passport.byteimg.com/img/user-avatar/3a2e98873c71e5f395dabcff50622478~100x100.awebp",
    },
    {
      title: "JS",
      cover: "http://img.mrzym.top/Fr8-ZW07pZEvq2uwcfFJunxkTcLE",
    },
    {
      title: "FMT",
      cover: "http://img.mrzym.top/FuBTokicmvyr9tA3x0z7KjXGEdWv",
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
            <Col xs={24} md={12}>
              <Card hoverable>
                <div className="h-[285px] bg-slate-50"></div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <div className="flex justify-around">
                <Slider cardList={tagList}></Slider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
