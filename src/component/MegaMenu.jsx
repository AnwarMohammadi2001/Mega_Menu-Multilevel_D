import React from "react";

const MegaMenu = ({ itemName, content }) => {
  return (
    <div className="absolute left-0 top-full w-full  min-h-[500px] bg-gray-800 text-white py-4 shadow-lg z-20">
      <div className="grid grid-cols-4 mx-40 place-items-center items-start mt-10 ">
        {content.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="hover:text-gray-500 text-sm text-white block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
