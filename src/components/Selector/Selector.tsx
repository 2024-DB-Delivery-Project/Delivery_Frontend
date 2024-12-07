import * as React from "react";

import { MenuItem, Select } from "@mui/material";
import { HandleChange, SelectorTS } from "./types";

export const Selector = ({ id, index, options }: SelectorTS) => {
  const [age, setAge] = React.useState<number[]>([]);

  const handleChange = ({ event, index }: HandleChange) => {
    setAge((prev) => {
      const updatedAges = [...prev];
      updatedAges[index] = event.target.value as number;
      return updatedAges;
    });
  };

  return (
    <div className="w-full">
      <Select
        labelId="demo-simple-select-label"
        id={`select-${id}`}
        value={age[index]}
        label="Age"
        onChange={(event) => handleChange({ event, index })}
        className="w-full"
      >
        {options.map((option, index) => (
          <MenuItem value={index}>{option}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Selector;
