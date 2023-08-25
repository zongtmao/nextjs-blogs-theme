import { fountBubbleProps, cardProps, work, footer } from "./type/component.type";

/*
 * @author: Zhang Yuming
 * @date: 2023-08-23 11:44:30
 * @description: 首页介绍自己的说，想说什么就写什么
 */
const sayingList: Array<string> = ["前端开发时长两年半", "热衷于学习前端最新技术", "经常coding忘记回复女友消息", "爱好唱、跳、rap、篮球", "喜欢猫猫狗狗", "热爱运动"];

/*
 * @author: Zhang Yuming
 * @date: 2023-08-25 10:23:01
 * id 唯一的key
 * text 展示的文本
 * tClass tailwind.css的样式
 */
const frameworkList: Array<fountBubbleProps> = [
  {
    id: 1,
    text: "React.js",
    tClass: "text-rose-300 bg-violet-600 outline-none ring ring-violet-300 text-2xl",
  },
  {
    id: 2,
    text: "Next.js",
    tClass: "text-pink-300 bg-violet-600 outline-none ring ring-violet-300 text-xl",
  },
  {
    id: 3,
    text: "Tailwind.css",
    tClass: "text-fuchsia-300 bg-violet-600 outline-none ring ring-violet-300 text-lg",
  },
  {
    id: 4,
    text: " React-gsap",
    tClass: "text-purple-300 bg-violet-600 outline-none ring ring-violet-300 text-md",
  },
  {
    id: 5,
    text: "Gsap",
    tClass: "text-indigo-300 bg-violet-600 outline-none ring ring-violet-300 text-sm ",
  },
  {
    id: 6,
    text: "Sass",
    tClass: "text-blue-300 bg-violet-600 outline-none ring ring-violet-300 text-3xl",
  },
];

/*
 * @author: Zhang Yuming
 * @date: 2023-08-17 22:26:22
 * @description 技能列表
 * id 唯一id
 * title 展示的标题
 * cover 卡片背景图片
 * color 标题字体颜色
 * fontSize 标题字体大小
 * backgroundImage 背景图片，用于渐变色
 * background 背景，可以写颜色之类的
 */
const mySkillsList: Array<cardProps> = [
  {
    id: 1,
    title: "Javascript",
    color: "#a991f5",
    backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
    fontSize: "32px",
  },
  {
    id: 2,
    title: "Html",
    backgroundImage: "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)",
    color: "#f0482c",
    fontSize: "36px",
  },
  {
    id: 3,
    title: "Css",
    backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
    fontSize: "28px",
    color: "#75a3c1",
  },
  {
    id: 4,
    title: "Vue",
    backgroundImage: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)",
    fontSize: "36px",
    color: "#42b883",
  },
  {
    id: 5,
    title: "React",
    backgroundImage: "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)",
    color: "#0a7ea4",
  },
  {
    id: 6,
    title: "Next",
    backgroundImage: "linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)",
    color: "#000",
  },
  {
    id: 7,
    title: "Element",
    backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
    color: "#409eff",
  },
  {
    id: 8,
    title: "AntDesign",
    backgroundImage: "linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)",
    color: "#1777ff",
  },
  {
    id: 9,
    title: "Tailwind",
    backgroundImage: "linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)",
    color: "#38bdf9",
  },
  {
    id: 10,
    title: "GSAP",
    backgroundImage: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)",
    color: "",
  },
  {
    id: 11,
    title: "Canvas",
    backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
    color: "",
  },
  {
    id: 12,
    title: "Node",
    backgroundImage: "linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)",
    color: "#80bd43",
  },
  {
    id: 13,
    title: "Koa",
    backgroundImage: "linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)",
  },
  {
    id: 14,
    title: "Java",
    backgroundImage: "linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)",
  },
];

/*
 * @author: Zhang Yuming
 * @date: 2023-08-22 17:04:31
 * @description: 个人作品列表
 * id 唯一id
 * workName 作品名称
 * onlineAddress 在线预览地址
 * codeAddress 作品源码链接
 * description 作品描述
 * cover 作品封面
 */
const myWorkList: Array<work> = [
  {
    id: 1,
    workName: "小张的个人博客前台",
    onlineAddress: "http://mrzym.top",
    codeAddress: "https://gitee.com/mrzym/blog-v3",
    description: "前后端分离博客前台，功能：文章、说说、留言、评论、相册、友链、音乐",
    tag: ["Vue3", "Element-Plus", "TailWind.css"],
    cover: "http://mrzym.top/nextm/work/blogV3.png",
  },
  {
    id: 2,
    workName: "小张的个人博客管理后台",
    onlineAddress: "http://mrzym.top/admin",
    codeAddress: "https://gitee.com/mrzym/blog-v3-admin",
    description: "前后端分离博客管理后台，功能：博客数据展示、文章管理、说说管理、留言管理、相册管理、友链管理",
    tag: ["Vue3", "Element-Plus", "TailWind.css", "PureAdmin", "Vite"],
    cover: "http://mrzym.top/nextm/work/blogV3Admin.png",
  },
  {
    id: 3,
    workName: "小张的个人博客后端服务",
    onlineAddress: "",
    codeAddress: "https://gitee.com/mrzym/blogServer",
    description: "前后端分离博客后端服务",
    tag: ["Node.js", "Koa"],
    cover: "http://mrzym.top/nextm/work/blogServer.png",
  },
  {
    id: 4,
    workName: "react18项目",
    onlineAddress: "https://gitee.com/mrzym/react-app",
    codeAddress: "https://gitee.com/mrzym/react-app",
    description: "练习使用最新的react搭建项目",
    tag: ["React", "React-router"],
    cover: "http://mrzym.top/nextm/work/react18.png",
  },
];

/**
 * 底部
 * 链接
 * 填入什么展示什么
 * title表示最顶层的标题
 *
 * id 唯一的key
 * title 展示的标题
 * url 跳转的地址
 * icon 图标
 * ...
 */
const footerList: Array<footer> = [
  {
    title: "方便找到我的链接 🔗",
    list: [
      {
        id: 1,
        title: "秋秋    🐧",
        icon: "",
        url: "http://wpa.qq.com/msgrd?v=3&uin=2715158815&site=qq&menu=yes",
      },
      {
        id: 3,
        title: "稀土掘金",
        icon: "",
        url: "https://juejin.cn/user/1297845830559559",
      },
      {
        id: 4,
        title: "CSDN",
        icon: "",
        url: "https://blog.csdn.net/abcd123596?spm=1000.2115.3001.5343",
      },
      {
        id: 5,
        title: "BiliBili",
        icon: "",
        url: "https://space.bilibili.com/419858932?spm_id_from=333.1007.0.0",
      },
      {
        id: 6,
        title: "Gitee",
        icon: "",
        url: "https://gitee.com/mrzym",
      },
      {
        id: 7,
        title: "Github",
        icon: "",
        url: "",
      },
    ],
  },
  {
    title: "近期的目标 🎯",
    list: [
      {
        id: 1,
        title: "写写react项目",
      },
      {
        id: 2,
        title: "学学canvas",
      },
      {
        id: 3,
        title: "搞搞Three.js",
      },
      {
        id: 4,
        title: "写点技术博客",
      },
    ],
  },
  {
    title: "关于我 🏠",
    list: [
      {
        id: 1,
        title: "99后    🧍‍♂️",
      },
      {
        id: 2,
        title: "闷骚  🧹",
      },
      {
        id: 3,
        title: "喜欢摆龙门阵  🤥",
      },
    ],
  },
];

export { sayingList, frameworkList, mySkillsList, myWorkList, footerList };
