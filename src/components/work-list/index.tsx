import { ScrollTrigger, Tween } from "react-gsap";

import Work from "./work";
import React from "react";

type Work = {
  id: number;
  workName: string;
  onlineAddress?: string;
  codeAddress: string;
  description: string;
  tag: Array<string>;
  cover: string;
};
export default class WorkList extends React.Component<Record<string, Array<Work>>, any> {
  workList: any;
  timer: NodeJS.Timeout | null;
  waterArr1: Array<any>;
  waterArr2: Array<any>;
  waterArr3: Array<any>;
  loading: boolean;
  constructor(props: any) {
    super(props);
    this.workList = props.workList;
    this.timer = null;
    this.waterArr1 = [];
    this.waterArr2 = [];
    this.waterArr3 = [];
    this.loading = false;
  }

  state = {
    screenWidth: 0 as number,
    arr1: [] as Array<any>,
    arr2: [] as Array<any>,
    arr3: [] as Array<any>,
    current: 1 as number,
    size: 3 as number,
    width: "w-[32%]" as string,
  };

  changeWindow = () => {
    let w = document.body.clientWidth;
    if (w > 768 && this.state.size == 3) return;
    if (w < 768 && this.state.size == 2) return;

    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.initWaterfall();
    }, 80);
  };

  initWaterfall = () => {
    let w = document.body.clientWidth;

    if (!this.workList.length) return;

    this.waterArr1 = [];
    this.waterArr2 = [];
    this.waterArr3 = [];

    // pc
    if (w > 768) {
      this.workList.forEach((v: Work, index: number) => {
        if (index % 3 == 0) {
          this.waterArr1.push(v);
        } else if (index % 3 == 1) {
          this.waterArr2.push(v);
        } else {
          this.waterArr3.push(v);
        }
      });
    } else {
      this.workList.forEach((v: Work, index: number) => {
        if (index % 2 == 0) {
          this.waterArr1.push(v);
        } else {
          this.waterArr2.push(v);
        }
      });
    }

    this.setState({
      screenWidth: document.body.offsetWidth,
      arr1: this.waterArr1,
      arr2: this.waterArr2,
      arr3: this.waterArr3,
      width: document.body.offsetWidth > 798 ? "w-[32%]" : "w-[49%]",
    });
  };

  componentDidMount(): void {
    this.initWaterfall();
    window.addEventListener("resize", this.changeWindow);
  }

  render(): React.ReactNode {
    const { arr1, arr2, arr3, width } = this.state;
    return (
      <>
        <ScrollTrigger start="-300px center" end="-200px center" scrub={2}>
          <Tween
            from={{
              y: "200px",
            }}
            to={{
              y: "0px",
            }}
          >
            <div className="flex justify-around items-start w-[100%]">
              <Work {...{ list: arr1, width, id: "arr1" }}></Work>
              <Work {...{ list: arr2, width, id: "arr2" }}></Work>
              <Work {...{ list: arr3, width, id: "arr3" }}></Work>
            </div>
          </Tween>
        </ScrollTrigger>
      </>
    );
  }
}
