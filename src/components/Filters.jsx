import React, { useContext, useRef, useState } from "react";
import { getArticles } from "../data/api";
import { ArticlesContext } from "./ArticlesContext";

const Filters = () => {
  const authRadioListRef = useRef();
  const handleAuthorRadioFocus = () => {
    authRadioListRef.current.classList.add("authorDropdownDisplay");
  };

  const {setArticles} = useContext(ArticlesContext);
  const [, setErrMsg] = useState("");
  const [, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsg(false);
    setSubmitted(true);
    let formData = Object.fromEntries(new FormData(e.target));
    try {
      const {articles} = await getArticles(formData);
      console.log('filterd articles: ', articles);
      setArticles(articles);
      // setErrMsg(data);
      setSubmitted(false);
    } catch (e) {
      setErrMsg(() => "Unknown Error. Please try again.");
      return e;
    }
  };

  return (
    <aside className="filters">
      <p>FILTERS:</p>
      <form
        id="filters_form"
        className="filters_form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <span className="border">
          <span className="topicsHeading">Favorite Topic</span>
          <br />
          <input
            type="radio"
            id="all"
            className="filterInput"
            name="topic"
            value=""
          />
          <label htmlFor="all">All</label>
          <br />
          <input
            type="radio"
            id="football"
            className="filterInput"
            name="topic"
            value="football"
          />
          <label htmlFor="football">Football</label>
          <br />
          <input
            type="radio"
            id="coding"
            className="filterInput"
            name="topic"
            value="coding"
          />
          <label htmlFor="coding">Coding</label>
          <br />
          <input
            type="radio"
            id="cooking"
            className="filterInput"
            name="topic"
            value="cooking"
          />
          <label htmlFor="cooking">Cooking</label>
          <br />
        </span>
        <span className="border">
          <span className="topicsHeading">Author</span>
          <br />
          <input
            type="radio"
            id="author"
            className="filterInput"
            name="topic"
            value="author"
            onClick={handleAuthorRadioFocus}
          />
          <label htmlFor="author">Author</label>
          <br />
          <div className="authorDropdownWrapper" ref={authRadioListRef}>
            <select name="author" id="authors" className="authorDropdown">
              {/* fill optioins from database */}
              <option value="any">Any</option>
              <option value="tickle22">trickle22</option>
              <option value="grumpy19">Grumpy19</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </span>
        <span className="border">
          <span className="topicsHeading">Order By</span>
          <br />
          <input
            type="radio"
            id="newestFirst"
            className="filterInput"
            name="order"
            value="DESC"
          />
          <label htmlFor="newestFirst">Newest first</label>
          <br />
          <input
            type="radio"
            id="oldestFirst"
            className="filterInput"
            name="order"
            value="ASC"
          />
          <label htmlFor="oldestFirst">Oldest first</label>
          <br />
          <input
            type="radio"
            id="voteCount"
            className="filterInput"
            name="order"
            value="DESC"
          />
          <label htmlFor="voteCount">Vote Count</label>
          <br />
        </span>
        <p>
          <input type="submit" />
        </p>
      </form>
    </aside>
  );
};

export default Filters;
