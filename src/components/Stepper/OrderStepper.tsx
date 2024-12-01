import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { colors } from "@mui/material";

const steps = ["주문접수", "물품 처리중", "배송중", "배송완료"];

export default function OrderStepper({ step }: { step: number }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepIcon-root": {
                color: index <= step ? "#FF7474" : "gray",
              },
            }}
          >
            <StepLabel sx={{ color: index <= step ? "#FF7474" : "gray" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
