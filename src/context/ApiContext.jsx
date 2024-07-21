import { createContext, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useState } from "react";
export const ApiCon = createContext();

export const ApiConProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_PRODUCT_API)
      .then((res) => {
        return setProducts(res.data?.products);
      })
      .catch((err) => {
        return AxiosError;
      });
  }, []);

  return (
    <ApiCon.Provider value={{ products, setProducts }}>
      {children}
    </ApiCon.Provider>
  );
};
