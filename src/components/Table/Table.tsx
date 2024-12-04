import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { HandleChange, InfoTableTS, LogisticSelector } from "./types";
import { MenuItem, Select } from "@mui/material";

const InfoTable = ({ rows, cols }: InfoTableTS) => {
  const [age, setAge] = React.useState<number[]>([]);

  const handleChange = ({ event, index }: HandleChange) => {
    setAge((prev) => {
      const updatedAges = [...prev];
      updatedAges[index] = event.target.value as number;
      return updatedAges;
    });
  };

  const logisticSelector = ({ id, index }: LogisticSelector) => {
    console.log("id", id);
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
          <MenuItem value={1}>logistics_A</MenuItem>
          <MenuItem value={2}>logistics_B</MenuItem>
        </Select>
      </div>
    );
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                  align="center"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                style={{ height: "10px" }}
                key={`row-${rowIndex}`}
              >
                {cols.map((col, colIndex) => (
                  <TableCell
                    align="center"
                    key={`cell-${rowIndex}-${colIndex}`}
                  >
                    {col.id === "logistic"
                      ? logisticSelector({
                          id: rowIndex.toString(),
                          index: rowIndex,
                        })
                      : (row as Record<string, any>)[col.id]}
                  </TableCell>
                  //() => logisticSelector({id : colIndex.toString()})
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InfoTable;
