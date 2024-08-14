import React from "react";
import HeaderStyles from "../styles/header.module.scss";
import { Select } from "antd";
import { countryOptions } from "../constants/country";

export default function SelectFlags({ handleCountry }) {
  return (
    <div className={HeaderStyles.flagDropDown}>
      <Select
        defaultValue="Country"
        style={{ width: 150, height: 35 }}
        onChange={handleCountry}
        options={countryOptions}
      />
    </div>
  );
}
