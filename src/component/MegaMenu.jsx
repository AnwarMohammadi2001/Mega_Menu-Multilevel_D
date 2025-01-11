import React from "react";

const MegaMenu = ({ itemName, content }) => {
  return (
    <div className="absolute left-0 top-full w-full px-5 min-h-[400px] bg-gray-800 text-white py-4 shadow-lg z-20">
      <div className="grid grid-cols-3 gap-6">
        {content.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {content.sectiona.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="hover:underline text-sm text-white block"
                  >
                    {item.name}
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
