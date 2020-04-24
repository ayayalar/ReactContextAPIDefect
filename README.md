# Provider

```js
export const Provider: React.FC = ({ children }) => {
  return (
    <FormContext.Provider value={{ name: 'Value From The Provider' }}>
      {children}
    </FormContext.Provider>
  );
};
```

# Consumer

```js
export const Consumer: React.FC = () => {
  const { name } = React.useContext(FormContext);
  const shouldPrint = `Name is: ${name}`;
  return <>{shouldPrint}</>;
};

```

# Hooks

```js
export interface ContextProps {
  name: string;
}

export const FormContext = createContext<ContextProps>({} as ContextProps);

export const useName = () => useContext(FormContext);
```