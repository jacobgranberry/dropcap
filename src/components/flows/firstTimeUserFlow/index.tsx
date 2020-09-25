import React from 'react';
import { Box } from 'rebass';
import { useStepper } from '../../../utils/hooks/useStepper';
import { FirstStep } from './steps';
import { Step } from '../../atoms/step';

const firstTimeUserSteps = [
  { slug: 'step-1', component: <FirstStep /> },
  { slug: 'step-2', component: <FirstStep /> },
];

export const FirstTimeUserFlow = () => {
  const { currentStepIndex, animationClass } = useStepper({ steps: firstTimeUserSteps });
  return (
    <Box key={currentStepIndex} className={animationClass}>
      {firstTimeUserSteps.map(
        (step, i) => currentStepIndex === i && <Step component={step.component} key={step.slug} />,
      )}
    </Box>
  );
};
