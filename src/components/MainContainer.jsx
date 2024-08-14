import React from 'react';
import MainContainerStyles from "../styles/mainContainer.module.scss";
import Card from './Card';

export default function MainContainer({ articles }) {
  return (
    <div className={MainContainerStyles.container}>
      {articles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
    </div>
  );
}
