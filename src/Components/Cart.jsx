import React, { useEffect, useState } from "react";
import { Minus, Plus, RefreshCw, Trash2, ShoppingCart } from "lucide-react";
import Button from "@/Components/ui/button";
import Input from "@/Components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/bagSlice";
import { Link, useNavigate } from "react-router-dom";
// import { cartItems } from "./data";
export default function ColorSchemeShoppingCart() {
  const [summary, setSummary] = useState({
    total: 0,
    shipping: 0,
    tax: 0,
  });
  const [quantity, setQuantity] = useState(1);
  const bag = useSelector((state) => state.bag);
  const { products } = useSelector((state) => state.product);
  // const [items,setItem] = useState()
  const [items, setItem] = useState();
  useEffect(() => {
    const temp = [...products.response];
    console.log("BAG->", bag.items);
    const summ = {
      item: 0,
      total: 0,
      shipping: 0,
      tax: 0,
    };

    // console.log(products.)
    const newItems = temp.filter((item) => {
      if (bag.items.hasOwnProperty(item._id)) {
        summ.item++;
        summ.total =
          summ.total +
          parseInt(item.discountPrice) * parseInt(bag.items[item._id]);
        summ.shipping += 5;
        summ.tax += 10;
        return true;
      }
    });
    setSummary(summ);
    // console.log("newItem", newItems);
    setItem(newItems);
  }, [bag]);
  const cartItems = [
    {
      id: 1,
      image: "/images/product1.jpg",
      productName:
        "10th Gen Intel Core i3-10105F Desktop Processor 4 Cores up to 4.4GHz Without Processor Graphics LGA 1200 (Intel 400 Series Chipset) 65W BX8070110105F",
      model: "BX8070110105F",
      quantity: 1,
      unitPrice: 6020,
    },
    {
      id: 2,
      image: "/images/product2.jpg",
      productName: "AMD Ryzen 5 3600 Desktop Processor",
      model: "100-100000031BOX",
      quantity: 2,
      unitPrice: 15000,
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleQuantityChange = (id, value) => {
    dispatch(bagAction.addToBag(id));
    // setQuantity(Math.max(1, value));
  };
  useEffect(() => {
    console.log(bag.items);
  }, [bag]);

  const handleRemove = (id) => {
    dispatch(bagAction.removeFromBag(id));
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#EEEEEE] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 flex items-center text-[#615EFC]">
        <ShoppingCart className="mr-2" />
        Shopping Cart
      </h1>
      <Card className="mb-8 bg-white border-[#D1D8C5]">
        <CardHeader className="bg-[#D1D8C5]">
          <CardTitle className="text-[#615EFC]">Your Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#D1D8C5]">
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items &&
                  items.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <img
                          src={item.images[0]}
                          // alt={item.image[0]}
                          width={80}
                          height={80}
                          className="rounded-md"
                        />
                      </TableCell>
                      <TableCell className="font-medium max-w-md">
                        {item.productName}
                      </TableCell>
                      <TableCell>Model</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleRemove(
                                item._id
                                // bag.items[item._id] - 1
                              )
                            }
                            className="border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={bag.items[item._id]}
                            onChange={(e) =>
                              handleQuantityChange(
                                item._id,
                                parseInt(e.target.value) || 0
                              )
                            }
                            className="w-16 text-center border-[#7E8EF1]"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              console.log(bag.items[item._id], item._id);
                              handleQuantityChange(item._id);
                            }}
                            className="border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>₹{item.discountPrice}</TableCell>
                      <TableCell>
                        ₹{(item.discountPrice * 1).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-[#7E8EF1] text-[#615EFC] hover:bg-[#7E8EF1] hover:text-white"
                          >
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="bg-[#615EFC] hover:bg-[#7E8EF1]"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#615EFC]">
            What would you like to do next?
          </h2>
          <p className="text-[#7E8EF1] mb-4">
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="coupon"
              className="border border-[#D1D8C5] rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-[#615EFC] hover:text-[#7E8EF1] hover:bg-[#F5F5F5] transition-all duration-300">
                <span className="text-lg font-semibold text-[#615EFC]">
                  Use Coupon Code
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your coupon here"
                    className="border-[#7E8EF1] flex-grow"
                  />
                  <Button className="bg-[#615EFC] hover:bg-[#7E8EF1] text-white">
                    Apply Coupon
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="shipping"
              className="border border-[#D1D8C5] rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-[#615EFC] hover:text-[#7E8EF1] hover:bg-[#F5F5F5] transition-all duration-300">
                <span className="text-lg font-semibold text-[#615EFC]">
                  Estimate Shipping & Taxes
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="space-y-4">
                  <Input
                    placeholder="Country"
                    className="border-[#7E8EF1] w-full"
                  />
                  <Input
                    placeholder="State/Province"
                    className="border-[#7E8EF1] w-full"
                  />
                  <Input
                    placeholder="Zip/Postal Code"
                    className="border-[#7E8EF1] w-full"
                  />
                  <Button className="bg-[#615EFC] hover:bg-[#7E8EF1] text-white w-full">
                    Calculate Shipping
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="gift"
              className="border border-[#D1D8C5] rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-[#615EFC] hover:text-[#7E8EF1] hover:bg-[#F5F5F5] transition-all duration-300">
                <span className="text-lg font-semibold text-[#615EFC] ">
                  Use Gift Certificate
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your gift certificate code"
                    className="border-[#7E8EF1] flex-grow"
                  />
                  <Button className="bg-[#615EFC] hover:bg-[#7E8EF1] text-white">
                    Apply Gift Certificate
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Card className="bg-white border-[#D1D8C5]">
          <CardHeader className="bg-[#D1D8C5]">
            <CardTitle className="text-[#615EFC]">
              Order Summary{" "}
              <span className="text-sm">({summary.item} items)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-[#7E8EF1]">Subtotal</span>
                <span className="text-[#615EFC]">₹{summary.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7E8EF1]">Shipping</span>
                <span className="text-[#615EFC]">₹{summary.shipping}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7E8EF1]">Tax</span>
                <span className="text-[#615EFC]">₹{summary.tax}</span>
              </div>
              <div className="border-t border-[#D1D8C5] pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-[#7E8EF1]">Total</span>
                  <span className="text-[#615EFC]">
                    ₹{summary.total + summary.tax + summary.shipping}
                  </span>
                </div>
              </div>
              <Button
                // to={"/checkout"}
                className="w-full mt-4 bg-[#615EFC] hover:bg-[#7E8EF1] text-white"
                size="lg"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Proceed to Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
