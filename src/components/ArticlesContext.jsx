import { createContext, useEffect, useState } from "react";
import { getArticles } from "../data/api";

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState({});
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
  }, [loading, setArticles]);

  if (loading) return <h2> Loading... Please wait</h2>;

  return (
    <ArticlesContext.Provider value={{ articles, setArticles, error, setError }}>
      {children}
    </ArticlesContext.Provider>
  );
};
