import React from 'react';
import { Button } from './index';
export default {
  title: 'Button',
  component: Button,
};

export const PrimaryButton = () => <Button variant="primary">Primary</Button>;

export const SecondaryButton = () => <Button variant="secondary">Secondary</Button>;
