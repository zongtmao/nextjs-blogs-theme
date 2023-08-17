import { Row, Col } from "antd";
import { useState } from "react";
import { Controls, PlayState, Timeline, Tween, SplitWords } from "react-gsap";

export default function HomeHeader(props: any) {
  const [playState, setPlayState] = useState<PlayState>();

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <div className="w-[100%] h-[50vh] md:h-[100vh] grid place-items-center">暂定一个时钟动画</div>
        </Col>
        <Col xs={24} md={10}>
          <div className="w-[100%] h-[50vh] px-[50px] py-[30px] md:h-[100vh] flex flex-col justify-center items-start">
            <div className="w-[80%] md:w-[50%] flex flex-col justify-center items-end">
              <Tween to={{ y: "-50px" }} stagger={0.05} duration={3} ease="elastic.out(2, 0.5)">
                <div className="text-8xl break-keep">M</div>
                <div className="text-2xl break-keep">abcdef</div>
                <div className="text-2xl break-keep">hello ddd</div>
              </Tween>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
