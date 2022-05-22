import React, { useState, useMemo, useEffect } from 'react';

//types
import { Module } from '../types';
import { ContextObject } from '../types';

/**
 * Global State Context Object & defaults
 */
export const AppContext = React.createContext<ContextObject>({
  isCartEmpty: true,
  modulesInCart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

/**
 * AppContextProvider HOC
 */
const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCartEmpty, setCartEmpty] = useState(true);
  const [modulesInCart, setModulesInCart] = useState<Module[]>([]);

  const length = modulesInCart.length;

  useEffect(() => {
    if (length) setCartEmpty(false);
    else setCartEmpty(true);
  }, [length]);

  //helpers
  const addToCart = (data: Module) => {
    setModulesInCart(prevState => [...prevState, data]);
  };

  const removeFromCart = (id: number) => {
    setModulesInCart(prevState => {
      return [...prevState].filter(module => module.id !== id);
    });
  };

  //context value
  const contextValue = useMemo(
    () => ({
      isCartEmpty,
      removeFromCart,
      addToCart,
      modulesInCart,
    }),
    [isCartEmpty, modulesInCart]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
