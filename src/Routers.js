import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Article from "./components/Article";
import ErrorPage from "./components/ErrorPage";

function Routers() {
  return (
    <Routes>
      <Route element={<><Header /><Outlet classname='outlet' /></>}>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="*" element={<ErrorPage status={404} />} />
      </Route>
    </Routes>
  );
}

export default Routers;
