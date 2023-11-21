import React from "react";

const CustomProductCard = ({ image, name, description, price }) => {
  return (
    <li className="flex justify-between gap-x-6 py-5 cursor-pointer hover:scale-105 transition-all duration-700">
      <div className="flex min-w-0 gap-x-4">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src={image}
          alt={`${name}_product_image`}
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {name}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {description}
          </p>
        </div>
      </div>
      <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">$ {price}</p>
        <p className="mt-1 text-xs leading-5 text-green-500">
          Availabe In-Stock
        </p>
      </div>
    </li>
  );
};

export default CustomProductCard;
