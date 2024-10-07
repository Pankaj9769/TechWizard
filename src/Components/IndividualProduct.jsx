import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
// import { useDispatch, useSelector } from "react-redux";
// import { bagAction } from "../../store/bagSlice";
import { FaArrowRightLong } from "react-icons/fa6";
// import { toast } from "react-toastify";
import { useContext } from "react";
// import { Context } from "../../store/Context";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { bagAction } from "../Store/bagSlice";
const IndividualProduct = () => {
  const item = useLocation().state;
  const dispatch = useDispatch();

  const addToBag = () => {
    // console
    console.log("Bag", item._id);
    // dispatch(bagAction.removeAll());
    // dispatch(bagAction.removeAll());
    dispatch(bagAction.addToBag(item._id));
  };

  return (
    <div className="subpixel-antialiased h-max p-5 flex flex-col">
      <span className="inline-block mt-2 ml-3 text-sm text-gray-600 capitalize">
        Home / Laptop / {item.productName} /
        <span className="font-bold"> {item.productName}</span>
      </span>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start h-max w-[100%]  gap-14 ml-3 mr-10 mt-6">
        <div className=" w-[70%] md:w-[60%] h-[20rem] md:h-fit  flex flex-row gap-3 overflow-y-auto md:overflow-hidden">
          <img
            src={item.images[0]}
            className="w-[100%] h-[20rem] object-cover  md:w-[49%] lg:h-[28rem] md:hover:scale-105 transition-all"
          />
          <img
            src={item.images[0]}
            className="w-[100%] h-[20rem] object-cover md:w-[49%] lg:h-[28rem] md:hover:scale-105 transition-all"
          />
        </div>

        {/* ITEM NAME */}
        <div className=" lg:w-[41%] ">
          <span className="inline-block h-max w-[100%] font-bold text-2xl text-gray-700">
            {item.productName}
          </span>
          <span className="inline-block h-max w-[100%] capitalize text-gray-400 text-lg mt-1">
            {item.description}
          </span>

          {/* RATING SECTION */}
          <div className="mt-4 border-gray-200 hover:border-black border-[1px] w-fit h-[1.75rem] rounded-[3px] text-xs font-semibold tracking-wide">
            <div className="flex flex-row items-center h-full">
              <span className=" font-semibold text-[0.9rem] ml-2">
                {item.rating.star}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 256 256"
                className="ml-1"
              >
                <path
                  fill="#379777"
                  d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                ></path>
              </svg>

              <span className=" ml-1 w-[1px] h-[1rem] border-r-2 border-gray-300 "></span>
              <span className="text-gray-500 font-normal text-[0.95rem] ml-2 mr-2">
                {item.rating.by} Ratings
              </span>
            </div>
          </div>
          <span className="inline-block border-b-[1px] border-gray-300 h-[1px] w-full"></span>

          {/* PRICE SECTION */}
          <div className="mb-1">
            <span className="inline-block font-bold text-[1.35rem] text-gray-700">
              ₹{item.discountPrice}
            </span>
            <span className="inline-block ml-2 text-[1.17rem] text-gray-500 line-through">
              ₹{item.originalPrice}
            </span>
            <span className="inline-block ml-2 text-[1.17rem] font-bold text-orange-400">
              ({item.discount}% OFF)
            </span>
          </div>
          <span className="font-bold text-sm text-[#379777]">
            inclusive of all taxes
          </span>

          {/* SIZE BUTTONS */}

          {/* ADD TO BAG BUTTON */}
          {/* {!bag.includes(String(item.id)) ? ( */}
          <button
            className="uppercase bg-color4 rounded-md hover:bg-opacity-85 mt-5 w-fit px-12 py-3 flex flex-row justify-center items-center gap-2 font-semibold text-white"
            onClick={addToBag}
          >
            <CiShoppingCart size={25} />
            <span>add to Cart</span>
          </button>
          {/* ) : ( */}
          <Link
            to="/cart"
            className="uppercase bg-color4 rounded-md hover:bg-opacity-85 mt-5 w-fit px-12 py-3 flex flex-row justify-center items-center gap-2 font-semibold text-white"
          >
            <span>go to cart</span>
            <FaArrowRightLong />
          </Link>
          {/* )} */}

          <span className=" inline-block border-b-[1px] border-gray-300 w-full h-[1px]"></span>
          <span className="inline-block text-gray-500 w-full">
            Get it within 5 days
          </span>
          <span className="inline-block w-full text-gray-800">
            Seller:
            <span className="text-color3  font-semibold"> TechWizard</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
