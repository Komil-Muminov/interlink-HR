import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { ColorlibConnector, QontoConnector, steps } from "./lib/lib";
import { QontoStepIcon } from "./lib/QontoStepIcon";
import { ColorlibStepIcon } from "./lib/ColorlibStepIcon";

export const StepperUI = ({ step }: { step?: string }) => {
  return (
    <Stack sx={{ width: "100%", padding: "20px 30px" }} spacing={4}>
      <Stepper activeStep={Number(step)} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};
