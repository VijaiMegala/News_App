import React, { useState } from "react";
import HeaderStyles from "../styles/header.module.scss";

export default function TopicList({ handleSelectedField }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const categories = [
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleClick = (value) => {
    setSelectedCategory(value); 
    handleSelectedField(value.toLowerCase());
  };

  return (
    <div className={HeaderStyles.list}>
      {categories.map((value) => (
        <span
          key={value}
          className={`${HeaderStyles.items} ${selectedCategory === value ? HeaderStyles.active : ''}`}
          onClick={() => handleClick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  );
}
