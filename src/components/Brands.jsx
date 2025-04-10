import adidas from "../assets/brands/adidas.svg";
import chanel from "../assets/brands/chanel.png";
import defacto from "../assets/brands/defacto.png";
import si from "../assets/brands/si.jpg";
import zara from "../assets/brands/zara.svg";

function Brands() {
  const brands = [
    {
      src: adidas,
      alt: "adidas",
    },
    {
      src: chanel,
      alt: "chanel",
    },
    {
      src: defacto,
      alt: "defacto",
    },
    {
      src: si,
      alt: "si",
    },
    {
      src: zara,
      alt: "zara",
    },
  ];

  return (
    <div className="m-20 flex flex-col gap-10">
      <h2 className="font-bold text-4xl">Brands</h2>

      <ul className=" justify-center min-lg:overflow-scroll hide-scrollbar  flex items-center gap-10 max-md:flex-col min-sm:flex-wrap">
        {brands.map((brand, index) => {
          return (
            <li
              key={index}
              className="bg-gray-200 w-75 flex items-center justify-center hover:bg-gray-300  text-2xl font-bold p-3 rounded-2xl "
            >
              <img
                className="w-60 h-60 max-lg:w-80 max-lg:h-80 object-contain object-center"
                src={brand.src}
                alt={brand.alt}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Brands;
