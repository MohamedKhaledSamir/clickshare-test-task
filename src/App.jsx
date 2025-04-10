import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className=" bg-gray-50 overflow-hidden">
      <Header />
      <Categories />

      <div className="filters-products gap-30 max-lg:gap-5 ml-10 max-lg:ml-5 flex mt-20 max-lg:mt-5 w-full max-lg:flex-col">
        <Filters />
        <Products />
      </div>
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
