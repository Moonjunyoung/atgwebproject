import React, { useState } from "react";
import Select from "react-select";
import "../css/ComponentNameListView.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ComponentNameListView = () => {
  const handleSelect = newvalue => {
    console.log(newvalue);
  };

  return (
    <div>
      <Select onChange={handleSelect} options={options} id="root-Selectbox" />
    </div>
  );
};

export default ComponentNameListView;
