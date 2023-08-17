import { Row, Col } from "antd";
export default function Footer() {
  return (
    <>
      <div className="flex-1 flex-col justify-between">
        <div className="w-[100%] h-[60%] md:px-[50px] px-[10px] py-[10px] rounded-lg text-black">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <div className="text-3xl">关于我</div>
              <ul className="mt-[10px]">
                <li>一名热爱敲代码的前端开发</li>
                <li>坤哥真爱粉</li>
                <li>闷骚</li>
              </ul>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-3xl">一些链接</div>
              <ul className="mt-[10px]">
                <li>小张的前后端分离博客</li>
                <li>稀土掘金</li>
                <li>CSDN</li>
                <li>哔哩哔哩</li>
                <li>Github</li>
              </ul>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-3xl">不知道想搞点什么</div>
              <div className="mt-[10px] text-xl">搞点近期目标吧</div>

              <ul className="mt-[10px]">
                <li>写写react项目</li>
                <li>学学canvas</li>
                <li>搞搞three</li>
                <li>写点技术博客</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="w-[100%] h-[30%] flex flex-col justify-center items-center text-white">小张啊小张 ，你在干什么</div>
      </div>
    </>
  );
}
