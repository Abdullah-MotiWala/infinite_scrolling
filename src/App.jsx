import { useEffect, useState } from "react";
import CustomListing from "./components/CustomListing";
import productsData from "./products.json";

function App() {
  const [productData, setProductData] = useState([]);

  const fetchData = () => {
    const { products } = productsData;
    setProductData((prev) => [...prev, ...products]);
  };
  const handleScroll = () => {
    const isBottomTouched =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;

    if (isBottomTouched) fetchData();
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-5 px-12">
      <CustomListing data={productData} handleScroll={handleScroll} />
    </div>
  );
}

export default App;
