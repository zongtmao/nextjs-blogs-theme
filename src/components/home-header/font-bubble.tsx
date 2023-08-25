import React, { createRef } from "react";

import classes from "./index.module.scss";
import { fountBubbleProps } from "@/type/component.type";

export class FontBubble extends React.Component<fountBubbleProps, any> {
  timer: NodeJS.Timeout | null;
  fontRef: React.RefObject<HTMLDivElement>;
  allTime: number;

  constructor(props: fountBubbleProps) {
    super(props);
    this.timer = null;
    this.fontRef = createRef();
    this.allTime = 0;
  }

  init = () => {
    const element = this.fontRef?.current;
    let delay = this.delay(this.props.id);
    let duration = this.duration();
    if (element) {
      // 设置动画时间、位移等
      element.style.setProperty("--delay", delay + "s");
      element.style.setProperty("--x1", this.translate() + "px");
      element.style.setProperty("--x2", this.translate() + "px");
      element.style.setProperty("--x3", this.translate() + "px");
      element.style.setProperty("--x4", this.translate() + "px");
      element.style.setProperty("--duration", duration + "s");
    }
    if (this.props.isFirst) {
      return;
    }
    // 记录动画消耗时间
    this.allTime = Math.round(delay + duration);

    this.timer = setInterval(() => {
      // 一个周期进行一次动画修改
      this.changeAnimation();
    }, this.allTime * 1000);
  };

  // 修改一些动画参数，delay和duration不修改
  changeAnimation = () => {
    const element = this.fontRef?.current;
    if (element) {
      element.style.setProperty("--x1", this.translate() + "px");
      element.style.setProperty("--x2", this.translate() + "px");
      element.style.setProperty("--x3", this.translate() + "px");
      element.style.setProperty("--x4", this.translate() + "px");
    }
  };

  duration = () => {
    return Math.round(Math.random() * (12 - 8) + 8);
  };

  // 位移距离
  translate = () => {
    let flag = 0;
    flag = Math.round(Math.random() * 6) / 100;
    if (flag > 2) {
      return Math.round(Math.random() * 150);
    } else {
      return 0 - Math.round(Math.random() * 150);
    }
  };

  delay = (id: number) => {
    if (this.props.isFirst) {
      return 0;
    }
    if (id < 3) {
      return Math.round(Math.random() * (4 - 1) + 1);
    } else if (id < 5) {
      return Math.round(Math.random() * (8 - 4) + 4);
    } else {
      return Math.round(Math.random() * (12 - 8) + 8);
    }
  };

  componentDidMount(): void {
    this.init();
  }

  componentWillUnmount(): void {
    this.timer && clearInterval(this.timer);
    this.timer = null;
  }

  render(): React.ReactNode {
    const { tClass, text, isFirst = false } = this.props;
    return (
      <>
        <div ref={this.fontRef} className={`${classes.homeRightText} ${isFirst ? classes.firstHomeRightText : ""}  whitespace-nowrap ${tClass}`}>
          {text}
        </div>
      </>
    );
  }
}
