import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import { MdFrontLoader } from "react-icons/md";
import { useEffect } from "react";
import { fetchProducts } from "../Store/productSlice";

const ProductsPage = ({ items }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetching the product state from Redux
  // const { products, loading, error } = useSelector((state) => state.product);

  // Check if products is defined and has a response property
  // const items = products.response || []; // Fallback to empty array if undefined

  // Fetch products on component mount
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  console.log("ProductPageHELLO->", items);

  return (
    <>
      <div className="flex flex-row gap-4 flex-wrap">
        {items && items.length > 0 ? (
          items.map((item) => (
            <a
              key={item.productName} // Added key for list items
              onClick={() => {
                navigate("/product", { state: item });
              }}
              className="flex flex-col hover:bg-color2 border-[1px] border-color2 rounded-sm cursor-pointer"
            >
              <img
                src={item.images[0]} // Accessing image safely
                alt={item.productName}
                className="h-52 w-52 object-cover"
              />
              <span className="inline-block w-[95%] border-b-[1px] border-color2 m-auto"></span>
              <div className="p-2 flex flex-col items-center">
                <span className="text-gray-800 font-bold overflow-hidden text-sm max-w-[190px] truncate">
                  {item.description}
                </span>
                <Rating rating={item.rating.star} by={item.rating.by} />
                <span className="text-gray-700 text-xl font-semibold">
                  ₹{item.discountPrice}{" "}
                  <span className="font-normal text-sm ">
                    ({item.discount}% OFF)
                  </span>
                </span>
                <span className="text-gray-500 font-normal line-through">
                  (₹{item.originalPrice})
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border-[1px] border-green-700 mt-1">
                  You will save ₹
                  {parseInt(item.originalPrice) - parseInt(item.discountPrice)}
                </span>
              </div>
            </a>
          ))
        ) : (
          <p>No products available</p> // Handle case when no products are found
        )}
      </div>
    </>
  );
};

export default ProductsPage;
