import { useState } from "react";
import { createPortal } from "react-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative group">
      {isOpen &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-full h-full"
          ></div>,
          document.body
        )}

      <button
        onClick={handleToggle}
        id="dropdown-button"
        className="inline-flex justify-center rounded-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        <BsThreeDotsVertical />
      </button>
      <div
        id="dropdown-menu"
        className={`${
          !isOpen && "hidden"
        } absolute left-0 mt-2 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
      >
        {options?.map((option, id) => {
          return (
            <button
              key={id}
              onClick={option?.action}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
            >
              {option?.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
