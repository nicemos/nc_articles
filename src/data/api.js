import axios from "axios";

const api = axios.create({
  baseURL: "https://articles-6py6.onrender.com/api",
});

// Get articles
export const getArticles = async (formData) => {
  try {
    if (formData) {
      console.log('{ ...formData }: ', { ...formData });
      const { data } = await api.get("/articles", { params: { ...formData } });
      return data;
    } else {
      const { data } = await api.get("/articles");
      return data;
    }
  } catch (error) {
    return error;
  }
};

export const getArticleById = async (article_id) => {
  try {
    const { data } = await api.get(`/articles/${article_id}`);
    return data;
  } catch (error) {
    return error;
  }
};
