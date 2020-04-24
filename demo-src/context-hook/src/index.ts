import { createContext, useContext } from 'react';

export interface ContextProps {
  name: string;
}

export const FormContext = createContext<ContextProps>({} as ContextProps);

export const useName = () => useContext(FormContext);
