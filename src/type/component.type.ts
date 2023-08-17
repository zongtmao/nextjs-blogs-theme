// 卡片props
export type cardProps = {
  id: string | number;
  title: string;
  cover?: string;
  color?: string;
  background?: string;
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
