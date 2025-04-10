function Categories() {
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys",
  ];

  return (
    <ul className="max-md:w-sm w-fit max-sm:px-3 mx-auto mt-20 max-lg:mt-10 flex items-center  overflow-scroll hide-scrollbar gap-10 ">
      {categories.map((category) => (
        <li
          className="bg-gray-50 border-1 text-nowrap border-gray-100 p-2 text-sm cursor-pointer select-none hover:bg-gray-100  rounded-3xl text-black"
          key={category}
        >
          {category}
        </li>
      ))}
      <li></li>
    </ul>
  );
}

export default Categories;
