import { useParams } from 'react-router-dom';
import '../index.css'
import { useEffect, useState } from 'react';
import { getArticleById } from '../data/api';
import ErrorPage from './ErrorPage';
import Card from './Card';

const Article = () => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();
  useEffect(() => {
      getArticleById(article_id)
      .then(({ article }) => {
        setArticle(article);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [loading, article_id]);

  if (loading) return <h2> Loading... Please wait</h2>;
 
  return (
    <main className="main">
      {article ? (
        <section className="singleCardGrid">
          {article.map((article) => (
            <Card key={article.article_id} article={article} cardClass='singleCard' />
          ))}
        </section>
      ) : (
        <ErrorPage error={error} />
      )}
    </main>
  );
}

export default Article;