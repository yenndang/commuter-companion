import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faInfoCircle,
  faPlayCircle,
  faWind,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import { useNavigate } from "react-router-dom";
import CompletionPopUp from "./popup/CompletionPopUp";

const SRDeepBreathing: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false); // State to control pop-up visibility
  const navigate = useNavigate();

  const handleItemClick = () => {
    // Show the pop-up when a list item is clicked
    setShowPopUp(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white z-10 sticky top-2">
          <button
            onClick={() => navigate("/stress-relief")} // Navigate back to StressRelief screen
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
            <div className="bg-purple-200 rounded-full p-4 w-15 h-15 flex">
              <FontAwesomeIcon
                icon={faWind}
                className="text-purple-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Deep Breathing</h1>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-purple-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-500 text-[10px] w-[250px]">
              Create your calm with a guided breathing session; customize your
              goal and duration to destress and refocus anytime.
            </p>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Results (1)</h2>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={handleItemClick} // Trigger pop-up on click
            >
              <div className="flex items-center">
                <div className="bg-purple-200 rounded-full w-8 h-8 mr-3"></div>
                <div>
                  <div className="font-bold text-sm">Quick + Calming</div>
                  <div className="text-gray-400 text-xs">10 Minutes</div>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-2xl text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Player Section */}
        <div
          className="bg-purple-200 rounded-[200px] p-2 flex items-center justify-between absolute left-4 right-4 z-10"
          style={{ bottom: "100px" }}
        >
          <audio
            controls
            className="w-full"
            style={{ height: "30px", borderRadius: "5px" }}
          >
            <source src="https://www.example.com/audio.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>

      {/* Show Pop-Up */}
      {showPopUp && (
        <CompletionPopUp
          badgeName="CALM GURU"
          progress="2/5"
          progressPercentage={40} // Adjust based on progress
          onClose={() => setShowPopUp(false)} // Close the pop-up
        />
      )}
    </div>
  );
};

export default SRDeepBreathing;
