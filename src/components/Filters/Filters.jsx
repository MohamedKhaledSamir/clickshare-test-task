import { FilterIcon } from "lucide-react";
import Filter from "./Filter";
import Range from "./Range";
import { useState } from "react";
import { categories } from "./data";

function Filters() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="bg-gray-100 py-10 max-lg:pb-2  h-fit  max-lg:bg-transparent px-10 max-lg:px-1 justify-center ">
      <h4
        onClick={() => setShowFilter(!showFilter)}
        className="font-bold text-2xl mb-1 max-lg:flex max-lg:gap-2 max-lg:border-b-1 max-lg:w-fit max-lg:pb-2 cursor-pointer"
      >
        Filters <FilterIcon className="min-lg:hidden" />
      </h4>

      <h5 className="text-xl max-lg:hidden">Categories</h5>
      <div className="filter gap-3 max-lg:hidden mt-5 justify-center max-lg:flex-col">
        <div className="categories max-lg:flex max-lg:gap-10 flex-wrap justify-start ">
          {categories.map((category) => {
            return <Filter key={category} category={category} />;
          })}
        </div>
        <Range />
      </div>

      {/* PHONE TOGGLE */}
      {showFilter && (
        <div className="filter gap-3  mt-5 justify-center max-lg:flex-col">
          <div className="categories max-lg:flex max-lg:gap-10 flex-wrap justify-start ">
            {categories.map((category) => {
              return <Filter key={category} category={category} />;
            })}
          </div>
          <Range />
        </div>
      )}
    </div>
  );
}

export default Filters;
