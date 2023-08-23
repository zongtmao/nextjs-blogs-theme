export default function Footer() {
  return (
    <>
      <div className="flex-1 flex-col] py-[10px] justify-between rounded-lg  relative">
        <div className="absolute w-[100%] blur-sm h-[100%]" style={{ backgroundColor: `rgba(255,255,255,0.2)` }}></div>
        <div className="w-[100%] h-[60%]  text-slate-900 flex justify-between flex-col md:flex-row">
          <ul className="mt-[10px]">
            <div className="text-3xl">关于我</div>
            <li>一名热爱敲代码的前端开发</li>
            <li>坤哥真爱粉</li>
            <li>闷骚</li>
          </ul>
          <ul className="mt-[10px]">
            <div className="text-3xl">一些链接</div>
            <li>小张的前后端分离博客</li>
            <li>稀土掘金</li>
            <li>CSDN</li>
            <li>哔哩哔哩</li>
            <li>Github</li>
          </ul>
          <ul className="mt-[10px]">
            <div className="text-3xl">不知道想搞点什么</div>
            <div className="mt-[10px] text-xl">搞点近期目标吧</div>
            <li>写写react项目</li>
            <li>学学canvas</li>
            <li>搞搞three</li>
            <li>写点技术博客</li>
          </ul>
        </div>
        <div className="w-[100%] h-[30%] flex flex-col justify-center items-center text-black">小张啊小张 ，你在干什么</div>
      </div>
    </>
  );
}
