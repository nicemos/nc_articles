import React, { useContext, useRef, useState } from "react";
import { getArticles } from "../data/api";
import { ArticlesContext } from "./ArticlesContext";

const Filters = () => {
  const authRadioListRef = useRef();
  const { setArticles } = useContext(ArticlesContext);
  const [, setErrMsg] = useState("");

  const handleAuthorRadioFocus = () => {
    authRadioListRef.current.classList.add("authorDropdownDisplay");
  };

  const clearClick = (name) => {
    const ele = document.getElementsByName(name);
    for (let i = 0; i < ele.length; i++) {
      ele[i].checked = false;
      if(name === 'author'){
        const authorElem = document.getElementById('authors')
        authorElem[0].selected = 'selected';
        // console.log('authorElem.defaultValue: ', authorElem.defaultValue);
        // authorElem.value = authorElem.defaultValue;
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    try {
      const { articles } = await getArticles(formData);
      setArticles(articles);
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
          <br />
          <input
            type="button"
            value="Reset"
            className="clearBtn"
            onClick={() => clearClick("topic")}
          />
        </span>

        <span className="border" id="authorFilter">
          <span className="topicsHeading">Articles By</span>
          <br />
          <input
            type="radio"
            id="author"
            className="filterInput"
            name="author"
            value="author"
            onClick={handleAuthorRadioFocus}
          />
          <label htmlFor="author">Author</label>
          <br />
          <div className="authorDropdownWrapper" ref={authRadioListRef}>
            <select name="authors" id="authors" className="authorDropdown">
              {/* fill optioins from database */}
              <option value="any">Any</option>
              <option value="tickle22">trickle22</option>
              <option value="grumpy19">Grumpy19</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <br />
          <input
            type="button"
            value="Reset"
            className="clearBtn"
            onClick={() => clearClick("author")}
          />
        </span>
        <span className="border">
          <span className="topicsHeading">Sort By</span>
          <br />
          <input
            type="radio"
            id="title"
            className="filterInput"
            name="sort_by"
            value="title"
          />
          <label htmlFor="title">Title</label>
          <br />
          
          <input
            type="radio"
            id="voteCount"
            className="filterInput"
            name="sort_by"
            value="votes"
          />
          <label htmlFor="voteCount">Vote Count</label>
          <br />
          <input
            type="button"
            value="Reset"
            className="clearBtn"
            onClick={() => clearClick("topic")}
          />
          <br />
          <input
            type="button"
            value="Reset"
            className="clearBtn"
            onClick={() => clearClick("sort_by")}
          />
        </span>
        <span className="border">
          <span className="topicsHeading">Order</span>
          <br />
          <input
            type="radio"
            id="oldestFirst"
            className="filterInput"
            name="order"
            value="ASC"
          />
          <label htmlFor="oldestFirst">Ascending</label>
          <br />
          <input
            type="radio"
            id="newestFirst"
            className="filterInput"
            name="order"
            value="DESC"
          />
          <label htmlFor="newestFirst">Descending</label>
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
          <br />
          <input
            type="button"
            value="Reset"
            className="clearBtn"
            onClick={() => clearClick("order")}
          />
        </span>
        
        <p>
          <input type="submit" />
          <input type="reset" value="Reset All" />
        </p>
      </form>
    </aside>
  );
};

export default Filters;
