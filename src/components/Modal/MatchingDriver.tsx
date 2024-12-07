import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Selector from "../Selector/Selector";
import MatchingDriverTS from "./types";

export default function MatchingDriver({
  open,
  handleClose,
}: MatchingDriverTS) {
  const selectOption: { [key: string]: string[] } = {
    서울: ["서울 - 배송기사1", "서울 - 배송기사2"],
    부산: ["부산 - 배송기사1", "부산 - 배송기사2"],
  };

  const deliverMocks = [
    {
      서울: [
        {
          name: "상품A",
          customerName: "customerA",
          customerPhone: "010-1234-5678",
          customerAddress: "서울시 강남구",
          trackingNumber: "123",
        },
        {
          name: "상품B",
          customerName: "customerB",
          customerPhone: "010-5678-1234",
          customerAddress: "서울시 강남구",
          trackingNumber: "123214",
        },
      ],
      부산: [
        {
          name: "상품C",
          customerName: "customerC",
          customerPhone: "010-8765-4321",
          customerAddress: "부산시 금정구",
          trackingNumber: "-",
        },
        {
          name: "상품D",
          customerName: "customerD",
          customerPhone: "010-4321-8765",
          customerAddress: "부산시 금정구",
          trackingNumber: "2134",
        },
      ],
    },
  ];

  const handleSend = () => {
    alert("배송기사 지정 완료!");
    handleClose();
  };

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#7B83EB",
            color: "#FFF",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ backgroundColor: "#4B53BC", color: "#FFF" }}
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              배송기사 지정
            </Typography>
            <Button
              autoFocus
              sx={{ backgroundColor: "#4B53BC", color: "#FFF" }}
              onClick={handleSend}
            >
              전송
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <div className="flex flex-col gap-8 px-8 py-8">
            {deliverMocks.map((deliverMock) =>
              Object.entries(deliverMock).map(([region, deliveries], index) => (
                <div key={region}>
                  <Typography variant="h6" component="div">
                    {region}
                  </Typography>
                  <Divider />
                  {deliveries.map((deliver) => (
                    <ListItemButton key={deliver.trackingNumber}>
                      <ListItemText primary={deliver.name} />
                      <ListItemText primary={deliver.customerName} />
                      <ListItemText primary={deliver.customerPhone} />
                      <ListItemText primary={deliver.customerAddress} />
                      <ListItemText primary={deliver.trackingNumber} />
                    </ListItemButton>
                  ))}
                  <div className="w-full flex items-center justify-end gap-8 p-8 px-auto">
                    <div className="w-fit">배송기사 선택</div>
                    <div className="w-1/3">
                      <Selector
                        id={index.toString()}
                        index={index}
                        options={selectOption[region]}
                        // onChange={handleDriverSelection}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </List>
      </Dialog>
    </>
  );
}
