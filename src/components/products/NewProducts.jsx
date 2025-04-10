import { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";
import { shuffleArray } from "../../utils";

function NewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const data = res.data;
      const shuffledData = shuffleArray(data);

      shuffledData.length = 10;
      setProducts(shuffledData);
    });
  }, []);

  return (
    products.length > 0 && (
      <div className=" max-w-full pr-45  max-lg:pr-7 flex flex-col gap-5">
        <h2 className="font-bold text-2xl">New Products</h2>
        <div className="products gap-5  pr-47 max-lg:pr-7 flex max-w-full  hide-scrollbar p-3 overflow-scroll">
          {products.map((product, index) => (
            <Product
              key={index}
              image={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default NewProducts;
