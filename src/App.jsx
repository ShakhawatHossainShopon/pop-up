// App.js
import { useState } from "react";
import EnhancedPopup from "./components/Modal"; // Adjust the path if necessary

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={openPopup}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Open Popup
      </button>

      <EnhancedPopup isOpen={isPopupOpen} onClose={closePopup} title="Welcome!">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-w-sm">
          {/* Card Image */}
          <img
            src="https://via.placeholder.com/400x300"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />

          {/* Card Content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Beautiful Sunset</h2>
            <p className="text-gray-600">
              Enjoy a beautiful sunset over the mountains with this stunning
              view.
            </p>
          </div>

          {/* Card Footer */}
          <div className="bg-gray-100 p-4 border-t border-gray-200">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Read More
            </button>
          </div>
        </div>
      </EnhancedPopup>
    </div>
  );
};

export default App;
