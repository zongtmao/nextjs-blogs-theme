// 获取当前页面滚动高度
export const getScrollTop = () => {
  return document.documentElement.scrollTop || document.body.scrollTop;
};

// 获取当前window的高度一半
export const getHalfScreenHeight = () => {
  return document.documentElement.clientHeight / 2;
};

// 根据id获取当前元素的高度
export const getDomHeightById = (id: string) => {
  if (!id) return 0;
  const dom = document.getElementById(id);
  if (!dom) {
    console.error(`没有id为${id}的元素，请检查id是否正确`);
  }

  return dom?.offsetHeight;
};
