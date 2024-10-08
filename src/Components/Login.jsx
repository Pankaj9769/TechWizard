import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/bagSlice";
// import { WishlistAction } from "../store/WishlistSlice";

import { Context } from "../store/Context";
// import { AddressAction } from "../store/AddressSlice";
// import { OrderAction } from "../store/OrderSlice";

const Login = () => {
  const { token, putToken, putUser } = useContext(Context);

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log("data", data.user.address[0].zip);
        data.user.address.forEach((addr) => {
          console.log("addr->", addr);
        });
        // toast.success("Logged In");
        dispatch(bagAction.addAll({ response: data.user.bag }));
        // dispatch(WishlistAction.addAll({ id: data.user.wishlist }));
        console.log("data.user->" + data.user);
        // dispatch(AddressAction.addAddress(data.user.address));
        // dispatch(OrderAction.addInitialOrder({ orders: data.user.orders }));
        putUser(data.user);
        putToken(data.token);

        navigate("/");
        emailRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        toast.error(`${data.response}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-red-50 h-max subpixel-antialiased">
      <div className="w-[80%] md:w-[28%] flex flex-col items-center bg-white border-[1px] border-gray-200 rounded-lg">
        <img src="/images/myntra-offer.jpg" alt="Myntra Offer" />
        <span className="text-lg font-semibold text-gray-700 mt-2">Login</span>
        <form
          onSubmit={loginUser}
          className="flex flex-col items-center w-full p-1"
        >
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="inline h-10 w-[90%] border-[1px] mt-2 mb-2 border-gray-200 outline-none focus:border-black p-2 rounded-md"
            ref={emailRef}
          />

          <input
            type="password"
            placeholder="Password"
            className="inline h-10 w-[90%] border-[1px] mt-2 mb-2 border-gray-200 outline-none focus:border-black p-2 rounded-md"
            ref={passwordRef}
          />
          <button
            type="submit"
            className="bg-red-500 w-[50%] py-2 rounded-sm my-2 text-white font-semibold hover:bg-red-600"
          >
            Login
          </button>
          <span className="text-xs text-gray-500 my-1">
            Not a customer?
            <Link to="/register" className="text-red-500 font-semibold">
              {" "}
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
