import React from "react";
import HeaderStyles from "../styles/header.module.scss";
import Logo from "./Logo";
import TopicList from "./TopicList";
import SelectFlags from "./SelectFlags";

export default function Header({handleCountry, handleSelectedField}) {

  return (
    <div className={HeaderStyles.container}>
      <Logo />
      <TopicList handleSelectedField = {handleSelectedField}/>
      <SelectFlags handleCountry={handleCountry}/>
    </div>
  );
}
