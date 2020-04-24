import * as React from 'react';
import { FormContext } from '@ayayalar/context-hook';

export const Provider: React.FC = ({ children }) => {
  return (
    <FormContext.Provider value={{ name: 'Value From The Provider' }}>
      {children}
    </FormContext.Provider>
  );
};
