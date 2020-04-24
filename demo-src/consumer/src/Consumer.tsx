import * as React from 'react';
import { FormContext } from '@ayayalar/context-hook';

export const Consumer: React.FC = () => {
  const { name } = React.useContext(FormContext);
  const shouldPrint = `Name is: ${name}`;
  return <>{shouldPrint}</>;
};
