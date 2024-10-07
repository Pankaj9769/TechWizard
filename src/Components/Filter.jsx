"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

import ProductsPage from "./ProductsPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProducts } from "../Store/productSlice";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const sortRef = useRef([]);
  const categoryRef = useRef([]);
  const handleSort = () => {
    const selectedSort = sortRef.current.find((input) => input.checked);

    // Check if a sort option is selected
    if (!selectedSort) return;

    // Clone the original items array to avoid mutations

    const newItems = items.map((item) => ({ ...item }));

    // Sort the items based on the selected criteria
    if (selectedSort.value === "rating") {
      newItems.sort((a, b) => Number(b.rating.star) - Number(a.rating.star)); // Sort descending by rating
    } else if (selectedSort.value === "priceAsc") {
      newItems.sort(
        (a, b) => Number(a.discountPrice) - Number(b.discountPrice)
      ); // Sort ascending by price
    } else if (selectedSort.value === "priceDesc") {
      newItems.sort(
        (a, b) => Number(b.discountPrice) - Number(a.discountPrice)
      ); // Sort descending by price
    }

    // Update the state with the new sorted items
    setItem(newItems);

    // Log the sorted items for debugging
    console.log("Sorted Items:", newItems);
  };

  const handleCategory = () => {
    const selectedCategory = categoryRef.current.find((input) => input.checked);
    // console.log("Selected Category:", selectedCategory.value,"---->>>",);
    const newItems = fetchedProducts.map((item) => ({ ...item }));
    const newList = newItems.filter(
      (item) =>
        // console.log(
        //   selectedCategory.value,
        //   "-->",
        //   item.type,
        //   "-->>",
        String(selectedCategory.value).toLowerCase() ===
        String(item.type).toLowerCase()
      // )
      //  return item.category.contains()
    );
    setItem(newList);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetching the product state from Redux
  const { products, loading, error } = useSelector((state) => state.product);

  // Check if products is defined and has a response property
  // const items =  || []; // Fallback to empty array if undefined
  const [items, setItem] = useState(null);
  const [fetchedProducts, setProduct] = useState(products.response);
  // Fetch products on component mount
  useEffect(() => {
    dispatch(fetchProducts());

    // setProduc
  }, [dispatch]);

  useEffect(() => {
    setItem(fetchedProducts);
  }, [fetchProducts]);

  console.log("ProductPageHELLO->", items);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="h-5 w-5 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-5 pt-5">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>

                {/* {filters.map((section) => ( */}
                <Disclosure
                  // key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {/* {section.name} */}Sort
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4 flex flex-col">
                      <div className="flex flex-row items-center gap-2">
                        <input
                          id="priceAsc"
                          type="radio"
                          ref={(el) => (sortRef.current[0] = el)}
                          name="sort"
                          value="priceAsc"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={() => handleSort()}
                        />{" "}
                        <label
                          htmlFor="priceAsc"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Price: Low to High
                        </label>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <input
                          id="priceDesc"
                          type="radio"
                          ref={(el) => (sortRef.current[1] = el)}
                          name="sort"
                          value="priceDesc"
                          onChange={() => handleSort()}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />{" "}
                        <label
                          htmlFor="priceDesc"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Price: High to Low
                        </label>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <input
                          id="Rating"
                          type="radio"
                          ref={(el) => (sortRef.current[2] = el)}
                          name="sort"
                          value="rating"
                          onChange={() => handleSort()}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />{" "}
                        <label
                          htmlFor="Rating"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Best Rating
                        </label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                {/*______________ Category _____________ */}

                <Disclosure
                  // key={section.id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">
                        {/* {section.name} */}Category
                      </span>
                      <span className="ml-6 flex items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-5 w-5 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-5 w-5 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4 flex flex-col">
                      <div className="flex flex-row items-center gap-2">
                        <input
                          id="laptop"
                          type="radio"
                          ref={(el) => (categoryRef.current[0] = el)}
                          name="category"
                          value="laptop"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={() => handleCategory()}
                        />{" "}
                        <label
                          htmlFor="laptop"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Laptop
                        </label>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <input
                          id="prebuildPC"
                          type="radio"
                          ref={(el) => (categoryRef.current[1] = el)}
                          name="category"
                          value="PC"
                          onChange={() => handleCategory()}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />{" "}
                        <label
                          htmlFor="prebuildPC"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Prebuild PC
                        </label>
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <input
                          id="accessories"
                          type="radio"
                          ref={(el) => (categoryRef.current[2] = el)}
                          name="category"
                          value="accessories"
                          onChange={() => handleCategory()}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />{" "}
                        <label
                          htmlFor="accessories"
                          className="ml-3 text-sm text-gray-600"
                        >
                          Accessories
                        </label>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductsPage items={items} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
