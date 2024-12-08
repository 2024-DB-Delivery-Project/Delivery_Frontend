import React, { useEffect, useState } from "react";
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
import { getDriversByCity } from "../../api/sellerApi";
import { LogisticsRow } from "../../page/logistics/types";

export default function MatchingDriver({
  open,
  handleClose,
  deliverCity,
  rows,
}: MatchingDriverTS) {
  const [driverOptions, setDriverOptions] = useState<{
    [key: string]: string[];
  }>({});

  const handleSend = () => {
    alert("배송기사 지정 완료!");
    handleClose();
  };

  useEffect(() => {
    const fetchDrivers = async () => {
      const options: { [key: string]: string[] } = {};

      for (const region of deliverCity) {
        try {
          const data = await getDriversByCity(region);
          options[region] = data.drivers.map(
            (driver: { name: string }) => `${region} - ${driver.name}`
          );
        } catch (error) {
          console.error(`Failed to fetch drivers for region ${region}`, error);
        }
      }

      setDriverOptions(options);
    };

    if (open) {
      fetchDrivers();
    }
  }, [open, deliverCity]);

  return (
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
          {deliverCity.map((region, index) => {
            const filteredRows = rows.filter((row: LogisticsRow) =>
              row.city.includes(region)
            );

            return (
              <div key={region}>
                <Typography variant="h6" component="div">
                  {region}
                </Typography>
                <Divider />
                {filteredRows.map((deliver) => (
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
                      options={driverOptions[region] || []}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </List>
    </Dialog>
  );
}
