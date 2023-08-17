import { Row, Col } from "antd";
import { Tween, ScrollTrigger } from "react-gsap";

export default function HomeHeader(props: any) {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={14}>
          <Tween
            from={{
              x: "-200px",
            }}
            to={{
              x: "0px",
            }}
          >
            <div className="w-[100%] h-[50vh] md:h-[100vh] grid place-items-center">暂定一个时钟动画</div>
          </Tween>
        </Col>
        <Col xs={24} md={10}>
          <div className="w-[100%] h-[50vh] px-[50px] py-[30px] md:h-[100vh] flex flex-col justify-center items-start">
            <div className="w-[80%] md:w-[50%] flex flex-col justify-center items-end">
              <Tween to={{ y: "-50px" }} stagger={0.05} duration={3} ease="elastic.out(2, 0.5)">
                <div className="text-8xl break-keep">M</div>
                <div className="text-2xl break-keep"></div>
                <div className="text-2xl break-keep">hello ddd</div>
                <div className="text-2xl break-keep"></div>
                <div className="text-2xl break-keep">hello ddd</div>
                <div className="text-2xl break-keep">hello ddd</div>
              </Tween>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
