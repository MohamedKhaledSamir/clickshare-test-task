import { useState, useEffect } from "react";
import Product from "./Product";
import { shuffleArray } from "../../utils";
import api from "../../api/axios";

function NewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      const data = res.data;

      shuffleArray(data);

      data.length = 10;
      setProducts(data);
    });
  }, []);

  return (
    (products.length > 0 && (
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
    )) || (
      <div className="w-full text-center p-5 text-neutral-950 font-bold text-lg">
        Loading...
      </div>
    )
  );
}

export default NewProducts;
