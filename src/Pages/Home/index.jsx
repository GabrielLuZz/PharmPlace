import BannerArea from "../../Components/Banner";
import SearchFilter from "../../Components/Filters/Filter";
import SearchInput from "../../Components/Filters/Input";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ProductMain from "../../Components/Product-main";
import ProductSection from "../../Components/Product-section";
import { useContext } from "react";
import { ProductsContext } from "../../Providers/products";

const Home = () => {
  const { setInputValue, setFilteredProducts, inputFilterFunction, products } =
    useContext(ProductsContext);
  return (
    <div>
      <Header />
      <BannerArea />
      <section>
        <SearchFilter data={products} set={setFilteredProducts} />
      </section>
      <SearchInput
        set={setInputValue}
        func={() => inputFilterFunction(products, setFilteredProducts)}
      />
      <ProductMain />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Home;
