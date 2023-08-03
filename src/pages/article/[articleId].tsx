import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Article() {
  const router = useRouter();

  const { query } = router;

  useEffect(() => {
    console.log(query.articleId);
  }, []);

  return (
    <>
      <div>Article-{query.articleId}</div>
    </>
  );
}
