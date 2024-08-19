// EnhancedPopup.js
import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5"; // Use react-icons for the close button

const EnhancedPopup = ({ isOpen, onClose, children, title }) => {
  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        onClose={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          aria-hidden="true"
          onClick={onClose}
        ></div>
        <div className="relative h-fit overflow-auto bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full p-6 mx-4 md:mx-8 ring-1 ring-gray-900/5">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <IoClose className="w-6 h-6" />
          </button>
          {title && (
            <Dialog.Title className="text-2xl font-semibold mb-4">
              {title}
            </Dialog.Title>
          )}
          <div>{children}</div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EnhancedPopup;
