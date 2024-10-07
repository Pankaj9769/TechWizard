import Filter from "./Filter";
import { MdFilterList } from "react-icons/md";
const Products = () => {
  return (
    <>
      <button className=" flex flex-row items-center gap-1 text-gray-800 min-[1025px]:hidden float-end mr-10 hover:underline mt-2 mb-1">
        Filter
        <MdFilterList />
      </button>
      <div className="w-[100%] flex flex-col md:flex-row ">
        <div className=" flex w-[95%] min-[1025px]:w-full flex-col mx-auto bg-red-300">
          <Filter />
        </div>
      </div>
    </>
  );
};

export default Products;
