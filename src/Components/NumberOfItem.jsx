import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NumberOfItem = () => {
  const bag = useSelector((state) => state.bag);
  const [number, setNumber] = useState(Object.keys(bag.items).length);

  useEffect(() => {
    setNumber(Object.keys(bag.items).length);
  }, [bag]);
  return (
    <>
      <span class="absolute top-0 right-0 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        {number}
      </span>
    </>
  );
};

export default NumberOfItem;
