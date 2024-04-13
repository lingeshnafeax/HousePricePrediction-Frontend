import { useState } from "react";

const ToolDescription = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (event: any) => {
    // Check if the clicked element is not the close button or the popup itself
    if (
      event.target !== event.currentTarget &&
      event.target.className !==
        "mt-4 p-2 bg-blue-500 text-white rounded-md block "
    ) {
      setIsOpen(false); // Close the popup if clicked outside
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center gap-y-5"
      onClick={handleClick}
    >
      <img src={props.imgUrl} className="h-40 w-40" alt={props.name} />
      <span className="rounded-md bg-gray-300 p-4 text-xl">{props.name}</span>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackgroundClick} // Add click handler to the entire popup
        >
          <div className="flex flex-col items-center justify-center rounded-md bg-white p-4 sm:text-xl">
            {props.desc}
            <button
              onClick={handleClose}
              className="mt-4 block rounded-md bg-blue-500 p-2 text-white "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolDescription;
