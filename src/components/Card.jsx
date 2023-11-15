import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ article, cardClass }) => {
  const dateString = article.created_at;
  const date = dateString.split("T")[0].split("-").reverse().join("/");
  // If Article creation time is needed.
  // const time = dateString.slice(
  //   dateString.indexOf("T") + 1,
  //   dateString.lastIndexOf(":")
  // );

  // Format the body element when single card is clicked
  if (cardClass === "singleCard" || cardClass === "sideListCard") {
    document.body.classList.add("homeAdj");
  } else {
    document.body.classList.remove("homeAdj");
  }
  const [articleVoteCount] = useState(article.votes);
  const Common = () => {
    return (
      <section className={cardClass}>
        <span className="singleCard-title">
          <h5 title="CLICK the HEADING to read an article.">{article.title}</h5>
        </span>
        <span className="cardMeta">
          <span>
            <p className="topicname">Topic: {article.topic}</p>
            <p className="author">Author: {article.author}</p>
          </span>
          <span className="dateTime">
            <p>Created At: {date}</p>
            {/* <p> Time: {time} </p> */}
          </span>
        </span>
        <img
          src={`${article.article_img_url}`}
          alt="Article Cover"
          className="cardImage"
          title="CLICK the HEADING to read an article."
        />
        <p className="body">{article.body}</p>
        <p className="votes-info">{articleVoteCount} likes</p>
      </section>
    );
  };
  return (
    <>
      {cardClass !== "singleCard" ? (
        <Link to={`/articles/${article.article_id}`} className="card-title">
          <Common />
        </Link>
      ) : (
        <Common />
      )}
    </>
  );
};

export default Card;
