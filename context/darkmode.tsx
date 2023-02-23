import { createContext, useContext, useState, ReactNode } from 'react';

type ContextType = {
  enabled: boolean;
  toggle: () => void;
};
const Context = createContext<ContextType>({ enabled: false, toggle: () => {} });

type Props = {
  children: ReactNode;
};
export function DarkModeContext({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  return <Context.Provider value={{ enabled: darkMode, toggle: toggle }}>{children}</Context.Provider>;
}

export function useDarkModeContext() {
  return useContext(Context);
}
