import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div className="all_page_bg">
            <Image src="/image/bg.avif" width={1000} height={1000} alt="" />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
export default MyDocument;
