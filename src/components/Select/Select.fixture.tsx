import React from "react";
import Select from "../Select";

export default (
  <Select onChangeHandler={(string) => console.log(string)}>
    <Select.Option>star rating</Select.Option>
    <Select.Option>date</Select.Option>
    <Select.Option>score</Select.Option>
    <Select.Option>other sort</Select.Option>
  </Select>
);
