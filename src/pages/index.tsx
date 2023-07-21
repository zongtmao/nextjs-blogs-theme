import { Card, Row, Col, Carousel } from "antd";
import CustomCard from "@/components/custom-card";
import "./index.scss";
import { useEffect, useRef } from "react";

export default function Home() {
  const tagPlayRef = useRef<any>();
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
      title: "Js",
      cover: "",
    },
    {
      title: "Js1",
      cover: "",
    },
    {
      title: "J2",
      cover: "",
    },
    {
      title: "J3",
      cover: "",
    },

    {
      title: "J7",
      cover: "",
    },
    {
      title: "J11",
      cover: "",
    },
  ];

  useEffect(() => {
    // tagPlayRef.current.style.backgroundColor = "#666";
    console.log(tagPlayRef.current.classList);
    document.documentElement.style.setProperty("--tag-play-width", tagPlayRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className="main_box">
        <div className="home">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Card hoverable>
                <div className="h-[200px] bg-slate-50"></div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="overflow-hidden">
                <div ref={tagPlayRef} className="h-[200px] grid grid-rows-2 grid-flow-col gap-8 tag-paly">
                  {tagList.map((tag) => {
                    return (
                      <div key={tag.title} className="flex justify-center items-center">
                        <CustomCard width={"90px"} height={"90px"} cover={tag.cover}>
                          {tag.title}
                        </CustomCard>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
