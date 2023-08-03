import { Row, Col } from "antd";
export default function Footer() {
  return (
    <>
      <div className="h-[100%] w-[100vw] md:px-[50px] px-[10px] py-[10px] bg-white text-black">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={8}>
            <div className="text-3xl">关于我</div>
            <ul className="mt-[10px]">
              <li>一名热爱敲代码的前端开发</li>
              <li>坤哥真爱粉</li>
              <li>sao</li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            一些链接
            <ul>
              <li>hhh</li>
              <li>hhh2</li>
              <li>hhh3</li>
              <li>hhh4</li>
            </ul>
          </Col>
          <Col xs={24} md={8}>
            想搞点什么
            <ul>
              <li>搞什么飞机呢</li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}
