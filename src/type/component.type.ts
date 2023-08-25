import { ReactNode } from "react";

// 首页打字机
export type typeWriterProps = {
  id?: string;
  writerList: Array<string>; // 打印文字列表
  timeSpace?: number; // 句子与句子之间的播放间隔
  wordPrintTime?: number; // 一个字打印的时间长度
  size?: string; // 字体大小
  color?: string; //字体颜色
};

// 首页字体气泡类型
export type fountBubbleProps = {
  id: number;
  text?: string;
  tClass?: string;
  isFirst?: boolean;
};

export type homeCenterProps = {
  bgColor?: string;
  children: ReactNode;
};

// slider的 卡片props
export type cardProps = {
  id: number;
  title: string;
  width?: string;
  height?: string;
  right?: string;
  background?: string;
  children?: ReactNode;
  cover?: string;
  color?: string;
  fontSize?: string;
  backgroundImage?: string;
};

// slider组件
export type sliderItemProps = {
  height?: number;
  isSecond?: boolean;
  cardList: Array<cardProps>;
};

export type slider = {
  id?: string;
  cardList: Array<cardProps>;
  cardItemHeight?: number;
};

// 头部标题
export type headerTitleProps = {
  title: string;
  icon?: string;
  size?: number;
  color?: string;
};

// 菜单
export type menuProps = {
  menuList: Array<menu>;
  bgWhite?: boolean;
  scrollTo: (id: string) => void;
};

export type menu = {
  id: string;
  title: string;
};

// 作品 props
export type workProps = {
  list: Array<work>;
  width: string;
  id: string;
};

// 作品
export type work = {
  id: number;
  workName: string;
  onlineAddress?: string;
  codeAddress: string;
  description: string;
  tag: Array<string>;
  cover: string;
};

// footer 底部
export type footerProps = {
  color?: string; // 字体颜色
  footerList: Array<footer>;
};
export type footer = {
  title?: string;
  list: Array<link>;
};
export type link = {
  id: string | number; // 唯一的key
  title: string; // 名称
  url?: string; // 链接地址
  icon?: string; // 图标
};
