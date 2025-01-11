import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu"; // Import the MegaMenu component
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  // Navigation items with their multilevel data
  const navItems = [
    {
      name: "New",
      path: "/home",
      content: {
        sections: [
          {
            title: "Men's Collection",
            items: ["Shoes", "T-Shirts", "Hats", "Accessories"],
          },
          {
            title: "Women's Collection",
            items: ["Dresses", "Bags", "Shoes"],
          },
          {
            title: "Exclusive",
            items: ["Limited Edition", "Seasonal Picks"],
          },
        ],
      },
    },
    {
      name: "Mew",
      path: "/about",
      content: {
        sections: [
          {
            title: "Our Story",
            items: ["History", "Vision", "Mission"],
          },
          {
            title: "Team",
            items: ["Leadership", "Staff"],
          },
          {
            title: "Careers",
            items: ["Job Openings", "Internships"],
          },
        ],
      },
    },
    {
      name: "Women",
      path: "/women",
      content: {
        sections: [
          {
            title: "Clothing",
            items: ["Dresses", "Tops", "Jeans", "Activewear"],
          },
          {
            title: "Accessories",
            items: ["Handbags", "Jewelry", "Scarves", "Watches"],
          },
          {
            title: "Shoes",
            items: ["Heels", "Flats", "Boots", "Sandals"],
          },
        ],
      },
    },
    {
      name: "Kids",
      path: "/kids",
      content: {
        sections: [
          {
            title: "Clothing",
            items: ["T-Shirts", "Shorts", "Jackets", "Sleepwear"],
          },
          {
            title: "Toys & Games",
            items: ["Puzzles", "Action Figures", "Educational Toys"],
          },
          {
            title: "Shoes",
            items: ["Sneakers", "Boots", "Sandals"],
          },
        ],
      },
    },
    {
      name: "Jordan",
      path: "/jordan",
      content: {
        sections: [
          {
            title: "Air Jordan Collection",
            items: ["Retro Sneakers", "New Releases", "Signature Styles"],
          },
          {
            title: "Apparel",
            items: ["Hoodies", "T-Shirts", "Tracksuits"],
          },
          {
            title: "Accessories",
            items: ["Caps", "Socks", "Bags"],
          },
        ],
      },
    },
  ];
  

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => setHoveredItem(index);
  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <nav className="bg-white  w-full shadow-md">
      <div className="py-4">
        <ul className="flex justify-center relative  w-full  gap-8">
          {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className=""
            >
              <Link
                to={item.path}
                className="text-gray-700 hover:text-blue-500 flex items-center gap-x-2 font-medium transition duration-300"
              >
                {item.name}
                <MdKeyboardArrowDown
                  className={`${
                    hoveredItem === index
                      ? "rotate-180 duration-300 transition-transform"
                      : ""
                  }`}
                  size={20}
                />
              </Link>

              {hoveredItem === index && (
                <div className="">
                  <MegaMenu itemName={item.name} content={item.content} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
