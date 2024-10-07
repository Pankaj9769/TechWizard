import React from "react";
import { IoMdStar } from "react-icons/io"; // Import Ionicons star

const Rating = ({ rating, totalStars = 5, by }) => {
  return (
    <div className="flex space-x-[1px] items-center">
      {Array.from({ length: totalStars }, (v, i) => i + 1).map((star) => (
        <>
          <IoMdStar
            key={star}
            className={`${star <= rating ? "text-color4" : "text-gray-400"}`}
            size={20} // Adjust the size here
          />
        </>
      ))}
      <span className="text-gray-500">({by})</span>
    </div>
  );
};

export default Rating;
