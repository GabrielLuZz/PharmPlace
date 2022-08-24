import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProductsPharma, setFilteredProductsPharma] = useState([]);
  const [filteredProductsDash, setFilteredProductsDash] = useState([]);
  const [pharmaProductsList, setPharmaProductsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [modalProduct, setModalProduct] = useState({
    open: false,
    product: {},
  });

  const getProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  };

  const inputFilterFunction = (data, set) => {
    const filterInput = data?.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(inputValue.toLowerCase()) ||
        category.toLowerCase().includes(inputValue.toLowerCase())
    );
    set(filterInput);
  };

  const filterWithCategory = (category, data, set) => {
    const filterCategory = data?.filter(
      (product) => product.category === category
    );
    set(filterCategory);
  };

  const filterAllWhiteCategory = (data, set) => {
    const filterAll = data?.map((p) => p);
    set(filterAll);
  };

  useEffect(() => {
    getProducts().then((resp) => {
      setProducts(resp);
      setFilteredProducts(resp);
    });
  }, []);

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  useEffect(() => {
    if (inputValue.length === 0) {
      setFilteredProducts([...products]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        setInputValue,
        filteredProducts,
        filteredProductsPharma,
        inputFilterFunction,
        filterWithCategory,
        pharmaProductsList,
        setPharmaProductsList,
        setFilteredProductsPharma,
        setFilteredProducts,
        removeProduct,
        filteredProductsDash,
        setFilteredProductsDash,
        filterAllWhiteCategory,
        modalProduct,
        setModalProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
