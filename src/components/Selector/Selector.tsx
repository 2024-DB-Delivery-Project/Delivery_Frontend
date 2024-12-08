import * as React from "react";
import { MenuItem, Select } from "@mui/material";
import { SelectorTS } from "./types";

export const Selector = ({ id, index, options, handleChange }: SelectorTS) => {
  const [age, setAge] = React.useState<number[]>([]);
  const localChange = (event: any) => {
    const targetValue = event.target.value; // Cast event.target to HTMLSelectElement
    handleChange(options[targetValue]); // Pass both the value and the text to your handler
  };

  return (
    <div className="w-full">
      <Select
        labelId="demo-simple-select-label"
        id={`select-${id}`}
        value={age[index] || ""} // Ensure the default value is not undefined
        label="Age"
        onChange={(event) => localChange(event)}
        className="w-full"
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={index}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default Selector;
