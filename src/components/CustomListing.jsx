import React from "react";
import CustomProductCard from "./CustomProductCard";

const CustomListing = ({ data }) => {
  return (
    <ul className="divide-y divide-gray-100">
      {data.map((item) => (
        <CustomProductCard key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CustomListing;
