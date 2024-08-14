import React from 'react';
import CardStyles from "../styles/card.module.scss";

export default function Card({ article }) {
  const { title, description, url, urlToImage, author, publishedAt } = article;
  const date = new Date(publishedAt).toLocaleDateString();

  return (
    <div className={CardStyles.container}>
      <div className={CardStyles.imageContainer}>
        <img className={CardStyles.image} src={urlToImage || './default-news-img.png'} alt="News" />
      </div>
      <div className={CardStyles.textContainer}>
        <div className={CardStyles.title}>{title}</div>
        {/* <div className={CardStyles.description}>{description}</div> */}
        <div className={CardStyles.url}>
          <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
        <div className={CardStyles.footer}>
          <div className={CardStyles.date}>{date}</div>
          <div className={CardStyles.author}>{author || 'Unknown'}</div>
        </div>
      </div>
    </div>
  );
}
