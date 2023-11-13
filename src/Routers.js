import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Article from "./components/Article";
import ErrorPage from "./components/ErrorPage";
import SideList from "./components/SideList";
import Filters from "./components/Filters";

function Routers() {
  return (
    <Routes>
      <Route element={<><Header/><Filters/><Outlet /></>}>
        <Route path="/" element={<Home gridClass={'homeGrid'}/>} />
        <Route path="/articles/:article_id" element={<><Article /><SideList/></>} />
        <Route path="*" element={<ErrorPage status={404} />} />
      </Route>
    </Routes>
  );
}

export default Routers;
