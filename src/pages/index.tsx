import { Card, Row, Col } from "antd";
import Slider from "@/components/slider-card";
import Footer from "@/components/footer";
import classes from "./index.module.scss";
import { useEffect, useState } from "react";
import HeaderTitle from "@/components/header-title";

type Props = {
  userList: [any];
};

export default function Home(props: Props) {
  const [tagList, setTagList] = useState<any>([]);

  const { userList }: any = props;

  useEffect(() => {
    setTagList(
      Array.isArray(userList)
        ? userList.map((v: any) => {
            return {
              title: v.name,
            };
          })
        : []
    );
  }, []);

  return (
    <>
      <div className="main_box">
        <div className={classes.home}>
          <HeaderTitle title="帅锅些" />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <div className="flex justify-around">
                <Slider cardList={tagList}></Slider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  let res: any;
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      res = json;
    });
  return {
    props: {
      userList: res,
    },
  };
}
