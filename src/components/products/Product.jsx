import { Heart } from "lucide-react";

function Product({ title, price, image }) {
  return (
    <div className="p-5  relative shadow-xl rounded-2xl">
      <Heart size={27} className="absolute top-5 right-5 cursor-pointer " />
      <img className="w-45 h-30 object-contain mt-10" src={image} alt={title} />
      <h4 className="max-w-40 text-ellipsis text-nowrap overflow-hidden text-center mx-auto mt-5">
        {title}
      </h4>
      <p className="mt-5">{price}$</p>
      <button className="bg-blue-800  block mx-auto text-center text-white px-3 py-1 rounded-lg  cursor-pointer mt-6">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
