import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faHeart,
  faInfoCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import { useNavigate } from "react-router-dom";
import CompletionPopUp from "./popup/CompletionPopUp";

const GuidedMindfulness: React.FC = () => {
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
        <div className="flex justify-between items-center p-4 bg-white sticky top-0 z-10">
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
                icon={faHeart}
                className="text-purple-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Guided Mindfulness</h1>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-purple-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-500 text-[10px] w-[250px]">
              Find your calm with guided mindfulness—customize your goal and
              duration to refocus and unwind anytime.
            </p>
          </div>

          {/* Filters Section */}
          <div className="flex justify-between items-center mb-4 space-x-2">
            {/* Goal Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Goal
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option value="positive-thoughts">Positive Thoughts</option>
                <option value="relaxation">Relaxation</option>
                <option value="focus">Improve Focus</option>
              </select>
            </div>

            {/* Duration Dropdown */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 text-sm">
                <option value="<15">&lt; 15 mins</option>
                <option value="15-30">15-30 mins</option>
                <option value=">30">&gt; 30 mins</option>
              </select>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">Results (2)</h2>
            {/* Body Scan */}
            <div
              className="flex justify-between items-center cursor-pointer mb-4"
              onClick={handleItemClick} // Trigger pop-up on click
            >
              <div className="flex items-center">
                <div className="bg-purple-200 rounded-full w-8 h-8 mr-3"></div>
                <div>
                  <div className="font-bold text-sm">Body Scan</div>
                  <div className="text-gray-400 text-xs">8 Minutes</div>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="text-2xl text-gray-500"
              />
            </div>
            {/* Five Senses */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={handleItemClick} // Trigger pop-up on click
            >
              <div className="flex items-center">
                <div className="bg-purple-200 rounded-full w-8 h-8 mr-3"></div>
                <div>
                  <div className="font-bold text-sm">Five Senses</div>
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
          badgeName="MINDFULNESS MASTER"
          progress="1/3"
          progressPercentage={33}
          onClose={() => setShowPopUp(false)} // Close the pop-up
        />
      )}
    </div>
  );
};

export default GuidedMindfulness;
