import { useState } from 'react';

const getIndexBySlug = (arr, matchId) => arr.findIndex(({ slug }) => slug === matchId);

const transitions = {
  enterRight: `fadeInRight`,
  enterLeft: `fadeInLeft`,
};

export const useStepper = ({ initialStep = 0, steps }: { initialStep?: number | string; steps: any }) => {
  // @TODO remove this once or if we implement typescript
  if (!Array.isArray(steps) && !Number.isInteger(steps)) {
    throw new Error('useStepper: You must specify an array of objects for `steps`');
  }

  const initialStepIndex = typeof initialStep === 'number' ? initialStep : getIndexBySlug(steps, initialStep);

  if (typeof initialStep === 'string' && initialStepIndex === -1) {
    throw new Error(`useStepper: slug of "${initialStep}" specified in initialStep not found in steps`);
  }

  const [currentStepIndex, setCurrentStepIndex] = useState(initialStepIndex);
  const [animations, setAnimations] = useState({});

  const currentStep = steps[currentStepIndex];

  const setActiveStep = (nextStep) => {
    if (currentStepIndex === nextStep) return;
    if (nextStep < 0 || nextStep > steps.length - 1) {
      console.error(`${nextStep + 1} is an invalid step`);
      return;
    }

    if (currentStepIndex < nextStep) {
      animations[nextStep] = transitions.enterRight;
    } else {
      animations[nextStep] = transitions.enterLeft;
    }
    setAnimations(animations);
    setCurrentStepIndex(nextStep);
  };

  // Navigation specific functions
  const navigation = {
    nextStep: () => setActiveStep(currentStepIndex + 1),
    prevStep: () => setActiveStep(currentStepIndex - 1),
    goToStep: (newStep) => {
      if (typeof newStep === 'number') {
        setActiveStep(newStep);
      } else {
        const newStepId = getIndexBySlug(steps, newStep);

        if (newStepId === -1) {
          console.error(`useStepper: goToStep("${newStep}") not found in steps`);
        }

        setActiveStep(newStepId);
      }
    },
  };

  return {
    animationClass: `animate__animated animate__${animations[currentStepIndex]} animate__fast`,
    currentStepIndex,
    currentStep,
    navigation,
  };
};
