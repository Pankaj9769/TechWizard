import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Header */}
        <div className="bg-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-8 w-8 text-[#069e1b]" />
            <h1 className="text-3xl font-bold text-[#069e1b]">Checkout</h1>
          </div>
          <span className="text-[#069e1b] text-sm">Secure Payment</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Personal Information */}
          <div className="p-6 bg-white">
            <h2 className="text-2xl font-semibold mb-6 text-[#615EFC]">
              Personal Information
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="text-[#615EFC] block mb-1"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="text-[#615EFC] block mb-1"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-[#615EFC] block mb-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#615EFC] block mb-1">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="flatNumber"
                    className="text-[#615EFC] block mb-1"
                  >
                    Flat Number
                  </Label>
                  <Input
                    id="flatNumber"
                    placeholder="Apt 4B"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="streetName"
                    className="text-[#615EFC] block mb-1"
                  >
                    Street Name
                  </Label>
                  <Input
                    id="streetName"
                    placeholder="123 Main St"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="landmark" className="text-[#615EFC] block mb-1">
                  Landmark
                </Label>
                <Input
                  id="landmark"
                  placeholder="Near Central Park"
                  className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-[#615EFC] block mb-1">
                    City
                  </Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="pincode"
                    className="text-[#615EFC] block mb-1"
                  >
                    Pincode
                  </Label>
                  <Input
                    id="pincode"
                    placeholder="10001"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="country" className="text-[#615EFC] block mb-1">
                  Country
                </Label>
                <Select>
                  <SelectTrigger
                    id="country"
                    className="bg-white border border-[#7E8EF1] rounded-lg p-2"
                  >
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="in">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </div>

          {/* Right side - Order Summary */}
          <div className="p-6 bg-[#D1D8C5] rounded-lg shadow-md border border-[#615EFC]">
            <h2 className="text-2xl font-semibold mb-6 text-[#615EFC]">
              Order Summary
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#615EFC]">Product 1</span>
                <span className="font-semibold">$19.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#615EFC]">Product 2</span>
                <span className="font-semibold">$29.99</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#615EFC]">Product 3</span>
                <span className="font-semibold">$39.99</span>
              </div>
              <Separator className="my-4 bg-white" />
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-[#615EFC]">Total</span>
                <span>$89.97</span>
              </div>
            </div>

            <Button className="w-full bg-[#615EFC] hover:bg-[#615EFC]/90 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg">
              Confirm Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
