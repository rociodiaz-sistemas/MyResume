import * as React from 'react';

import MobileStepper from '@mui/material/MobileStepper';

export default function Dots({activeStep, style}) {
  return (
    <MobileStepper
      style={style}
      variant="dots"
      steps={2}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
    />
  );
}
