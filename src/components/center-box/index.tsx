import { homeCenterProps } from "@/type/component.type";

export default function CenterBox({ bgColor, children }: homeCenterProps) {
  return (
    <>
      <div className="w-[100vw] px-[3px]" style={{ backgroundColor: bgColor }}>
        <div className="max-w-[1080px] mx-auto">{children}</div>
      </div>
    </>
  );
}
