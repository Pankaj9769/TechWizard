import { useEffect } from "react";
// import { productAction } from "../Store/productSlice";
import { useDispatch } from "react-redux";

const FetchProduct = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getAll = async () => {
  //     const response = await fetch("http://localhost:3000/product/all", {
  //       method: "GET",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("First->", data.response);
  //       // console.log()
  //       dispatch(productAction.addAll(data.response));
  //     }
  //   };
  // getAll();
  // }, []);
  return <></>;
};

export default FetchProduct;
