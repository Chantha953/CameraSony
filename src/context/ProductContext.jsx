import React, { createContext, useState } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <ProductContext.Provider value={{ showDetail, setShowDetail }}>
      {children}
    </ProductContext.Provider>
  );
};
