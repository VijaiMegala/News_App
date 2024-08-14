import React from "react";
import LogoStyles from "../styles/logo.module.scss"
import { GiNewspaper } from "react-icons/gi";

export default function Logo() {
  return (
    <div className={LogoStyles.logo}>
      <GiNewspaper color="white" size={30} />
      <span className={LogoStyles.logoText}>Newsify</span>
    </div>
  );
}
