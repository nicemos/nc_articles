import { useEffect, useState } from "react";
import { getArticles } from "../data/api";
import Card from "./Card";
import ErrorPage from "./ErrorPage";

const Home = ({gridClass, sideListCard}) => {
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
    <>
      <main className="main">
        {articles ? (
          <ul className={gridClass}>
            {articles.map((article) => (
              <li key={article.article_id}>
                <Card {...{ article, cardClass: sideListCard ? sideListCard : "homeCard" }} />
              </li>
            ))}
          </ul>
        ) : (
          <ErrorPage error={error} />
        )}
      </main>
    </>
  );
};

export default Home;
