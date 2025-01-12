import React from "react";

const MegaMenu = ({ itemName, content, isVisible }) => {
  return (
    <div
      className={`absolute left-0 top-full w-full ${
        isVisible ? "translate-x-0" : "translate-x-full"
      } overflow-hidden bg-white  shadow-lg z-20  transition-transform duration-500`}
      style={{
        height: isVisible ? "auto" : "0",
        paddingTop: isVisible ? "1rem" : "0",
        paddingBottom: isVisible ? "1rem" : "0",
      }}
    >
      <div className="grid grid-cols-4 mx-40 place-items-center items-start mt-10 transition-all pb-10">
        {content.sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="hover:text-gray-500 text-sm hover:border-b text-slate-800 block"
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
