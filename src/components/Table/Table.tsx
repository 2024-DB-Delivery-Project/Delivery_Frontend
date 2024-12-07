import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { InfoTableTS } from "./types";
import Selector from "../Selector/Selector";

const InfoTable = ({ rows, cols }: InfoTableTS) => {
  const selectorOptios = ["logistic1", "logistic2", "logistic3"];
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
                    {col.id === "logistic" ? (
                      <Selector
                        id={colIndex.toString()}
                        index={rowIndex}
                        options={selectorOptios}
                        // onChange={() => {}} //TODO
                      />
                    ) : (
                      (row as Record<string, any>)[col.id]
                    )}
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
