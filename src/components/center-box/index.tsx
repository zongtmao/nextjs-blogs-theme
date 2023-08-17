export default function CenterBox({ bgColor, children }: any) {
  return (
    <>
      <div className="w-[100vw] px-[3px]" style={{ backgroundColor: bgColor }}>
        <div className="max-w-[1080px] mx-auto">{children}</div>
      </div>
    </>
  );
}
