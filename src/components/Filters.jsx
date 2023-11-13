import React, { useRef } from "react";

const Filters = () => {
  const authRadioListRef = useRef();
  const handleAuthorRadioFocus = () => {
    authRadioListRef.current.classList.add('authorDropdownDisplay');
  }
  const handleAuthorRadioBlur = () => {
    const auth = document.getElementById('author');
    if(auth.checked)
    {
      authRadioListRef.current.classList.remove('authorDropdownDisplay');
    }
  }
  return (
    <aside className="filters">
      <p>FILTERS:</p>
      <form className="form" action="/">
        <span className="border">
          <span className="topicsHeading">Favorite</span>
          <br />
          <input type="radio" id="all" className="filterInput" name="favFilter" value="all" />
          <label htmlFor="all">All</label>
          <br />
          <input type="radio" id="football" className="filterInput" name="favFilter" value="football" />
          <label htmlFor="football">Football</label>
          <br />
          <input type="radio" id="coding" className="filterInput" name="favFilter" value="coding" />
          <label htmlFor="coding">Coding</label>
          <br />
          <input type="radio" id="food" className="filterInput" name="favFilter" value="food" />
          <label htmlFor="food">Food</label>
          <br />
          <input type="radio" id="author" className="filterInput" name="favFilter" value="author" onClick={handleAuthorRadioFocus} onBlur={handleAuthorRadioBlur} />
          <label htmlFor="author">Author</label>
          <br />
          <div className="authorDropdownWrapper" ref={authRadioListRef} >
          <select name="favFilter" id="authors" className="authorDropdown" >
            {/* fill optioins from database */}
            <option value="any">Any</option>
            <option value="volvo">trickle22</option>
            <option value="saab">Grumpy19</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          </div>
        </span>
        <span className="border">
          <span className="topicsHeading">Sort By</span>
          <br />
          <input type="radio" id="newestFirst" className="filterInput" name="sortBy" value="newestFirst" />
          <label htmlFor="newestFirst">Newest first</label>
          <br />
          <input type="radio" id="oldestFirst" className="filterInput" name="sortBy" value="oldestFirst" />
          <label htmlFor="oldestFirst">Oldest first</label>
          <br />
          <input type="radio" id="voteCount" className="filterInput" name="sortBy" value="voteCount" />
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