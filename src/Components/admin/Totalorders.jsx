import React from 'react';
import { FaBagShopping, FaSackDollar } from 'react-icons/fa6';
import { IoCart } from "react-icons/io5";
import { FaStreetView } from "react-icons/fa";
import { Button } from '../ui/button';




const items = [
    { logo: FaBagShopping, text: "Total orders", count: 128 },
    { logo: IoCart, text: "New orders", count: 24 },
    { logo: FaSackDollar, text: "Total Reveneu", count: "$12.5K" },
    {logo: FaStreetView, text: "Total Visitors", count: 3456 },
];

const Totalorders = () => {
    return (
        <div className="flex flex-wrap gap-4">
            {items.map((item, index) => {
                const Icon = item.logo;
                return (
                    <div
                        key={index}
                        className="grid grid-cols-[40%_1fr]  gap-4 p-6 w-52 h-auto border border-gray-400/20 backdrop-blur-md rounded-lg  duration-300 cursor-pointer"
                    >
                        <Button  className=" w-20 h-20 place-items-center  rounded-full text-white transition-colors">
                            <Icon size={44} />
                        </Button>
                        <div>
                            <p className="text-2xl text-end font-extrabold text-yellow-500">{item.count}</p>
                            <h2 className="text-lg  text-end place-items-end  font-bold text-white/80">{item.text}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Totalorders;
