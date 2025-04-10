import React from "react";
import NewProducts from "./NewProducts";
import RecommendedProducts from "./RecommendedProducts";

function Products() {
  return (
    <div className="w-full flex items-center gap-20  justify-center flex-col ">
      <NewProducts />
      <RecommendedProducts />
    </div>
  );
}

export default Products;
