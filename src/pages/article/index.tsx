import Router from "next/router";

export default function ArticleList() {
  const goToArticleDetail = (id: number) => {
    Router.push("/article/" + id);
  };

  return (
    <>
      <ul>
        <li onClick={() => goToArticleDetail(1)}>文章一</li>
        <li onClick={() => goToArticleDetail(2)}>文章二</li>
        <li onClick={() => goToArticleDetail(3)}>文章三</li>
      </ul>
    </>
  );
}
