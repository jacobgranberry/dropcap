import React from 'react';

// For use with the useStepper hook.  Don't add any other wrappers or logic here

export const Step = ({ component, ...props }: any) => React.cloneElement(component, props);
