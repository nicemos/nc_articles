import { useContext} from "react";
import Card from "./Card";
import ErrorPage from "./ErrorPage";
import { ArticlesContext } from "./ArticlesContext";

const Home = ({gridClass, sideListCard}) => {
  const {articles, error} = useContext(ArticlesContext);
  
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
