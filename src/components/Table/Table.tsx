import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Cols, PurchaseButton, Rows } from "./types";
import { Button } from "@mui/material";

const columns: Cols[] = [
  { id: "img", label: "이미지", minWidth: 120 },
  { id: "name", label: "상품명", minWidth: 120 },
  { id: "price", label: "가격", minWidth: 170 },
  { id: "button", label: "구매하기", minWidth: 170 },
];

const purchaseButton = ({ ispurchased }: PurchaseButton) => {
  return (
    <Button
      style={{
        backgroundColor: ispurchased ? "#CFCFCF" : "#FF7474",
        color: "#FFF",
        fontWeight: 800,
      }}
      onClick={ispurchased ? undefined : () => alert("상품을 구매하였습니다.")}
    >
      상품 구매하기
    </Button>
  );
};

const rows: Rows[] = [
  {
    img: "🍔",
    name: "상품A",
    price: 3000,
    button: purchaseButton({ ispurchased: false }),
  },
  {
    img: "⚽",
    name: "상품B",
    price: 10000,
    button: purchaseButton({ ispurchased: false }),
  },
  {
    img: "🧢",
    name: "상품C",
    price: 15000,
    button: purchaseButton({ ispurchased: false }),
  },
  {
    img: "💼",
    name: "상품D",
    price: 40000,
    button: purchaseButton({ ispurchased: true }),
  },
];

const InfoTable = () => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  style={{ height: "10px" }}
                >
                  <TableCell align={"center"}>{row["img"]}</TableCell>
                  <TableCell align={"center"}>{row["name"]}</TableCell>
                  <TableCell align={"center"}>{row["price"]}</TableCell>
                  <TableCell align={"center"}>{row["button"]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default InfoTable;
