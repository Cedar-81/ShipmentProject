import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    width: "100%"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0057B8',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#0057B8',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#0057B8',
    borderTopWidth: 2,
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      borderColor: theme.palette.grey[800],
    }),
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme }) => ({
    color: '#eaeaf0',
    display: 'flex',
    flexDirection: 'row',
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    '& .QontoStepIcon-completedIcon': {
      color: 'white',
      zIndex: 1,
      fontSize: 8,
    },
    // '& .QontoStepIcon-circle': {
    //   backgroundColor: 'currentColor',
    // },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[700],
    }),
    variants: [
      {
        props: ({ ownerState }) => ownerState.active,
        style: {
          color: '#784af4',
        },
      },
    ],
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        
        <div className='QontoStepIcon-completedIcon size-8 flex items-center font-medium justify-center bg-completed rounded-full'><TaskAltIcon sx={{height: "18px", width: "18px"}} /></div>
        
      ) : (
        <div className="QontoStepIcon-circle size-8 flex items-center font-medium justify-center bg-brand text-white rounded-full"><p>5</p></div>
      )}
    </QontoStepIconRoot>
  );
}

const steps = ['Create Shipment', 'Repacking & Consolidation', 'Shipment Details', 'Shipping Method', 'Summary & Confirmation'];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper 
        activeStep={4} 
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
