import { useEffect, useState } from "react";
import { getArticles } from "../data/api";
import Card from "./Card";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
      getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [loading]);

  if (loading) return <h2> Loading... Please wait</h2>;
 
  return (
    <main className="main">
      {articles ? (
        <section className="grid">
          {articles.map((article) => (
            <Card key={article.article_id} {...{ article, cardClass:'card'}}
            />
          ))}
        </section>
      ) : (
        <ErrorPage error={error} />
      )}
    </main>
  );
};

export default Home;
