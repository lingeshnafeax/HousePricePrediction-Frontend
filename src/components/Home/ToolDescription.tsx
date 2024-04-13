import React, { useState } from "react";

const ToolDescription = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (event) => {
    // Check if the clicked element is not the close button or the popup itself
    if (event.target !== event.currentTarget && event.target.className !== "mt-4 p-2 bg-blue-500 text-white rounded-md block ") {
      setIsOpen(false); // Close the popup if clicked outside
    }
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center gap-y-5"
      onClick={handleClick}
    >
      <img src={props.imgUrl} className="h-40 w-40" alt={props.name} />
      <span className="p-4 bg-gray-300 rounded-md text-xl">{props.name}</span>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50"
          onClick={handleBackgroundClick} // Add click handler to the entire popup
        >
          <div className="bg-white rounded-md p-4 text-xl flex items-center justify-center flex-col">
            {props.desc}
            <button onClick={handleClose} className="mt-4 p-2 bg-blue-500 text-white rounded-md block ">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolDescription;
