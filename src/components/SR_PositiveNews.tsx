import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faEnvelope,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import CompletionPopUp from "./popup/CompletionPopUp";
import { useNavigate } from "react-router-dom";

const PositiveNews: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false); // State to control pop-up visibility
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to display the popup after 15 seconds
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 15000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white z-10 sticky top-2">
          <button
            onClick={() => navigate("/stress-relief")} // Navigate back to Stress Relief screen
            className="text-gray-500 text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <FontAwesomeIcon
            icon={faCog}
            className="text-gray-500 text-2xl pt-1 cursor-pointer"
            onClick={() => navigate("/settings")}
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4">
          {/* Title Section */}
          <div className="flex items-center mb-4">
            <div className="bg-purple-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-purple-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Positive News</h1>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-purple-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-600 text-[10px]">
              Read positive news stories to brighten your day!
            </p>
          </div>

          {/* Embedded Positive News Website */}
          <iframe
            title="Good News Network"
            src="https://www.goodnewsnetwork.org/category/news/"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>

      {/* Completion Pop-Up */}
      {showPopUp && (
        <CompletionPopUp
          badgeName="POSITIVE THINKER"
          progress="3/5"
          progressPercentage={60} // Adjust based on progress
          onClose={() => {
            setShowPopUp(false);
            navigate("/stress-relief"); // Navigate back to Stress Relief screen after closing the pop-up
          }}
        />
      )}
    </div>
  );
};

export default PositiveNews;
