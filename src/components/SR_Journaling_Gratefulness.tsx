import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faBook,
  faSyncAlt,
  faCamera,
  faSmile,
  faHeartbeat,
  faMusic,
  faBus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./misc/NavigationBar";
import CompletionPopUp from "./popup/CompletionPopUp";

const GratefulnessJournal: React.FC = () => {
  const navigate = useNavigate(); // Navigation handler
  const prompts = [
    "What made you smile today?",
    "What are you grateful for right now?",
    "What act of kindness brightened your day?",
    "Who or what brings you joy?",
    "What positive event happened recently?",
  ];
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false); // Control pop-up visibility

  const handleCyclePrompt = () => {
    // Cycle through prompts
    setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };

  const handleSave = () => {
    // Show the completion pop-up
    setShowPopUp(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white sticky top-0 z-10">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-500 text-2xl cursor-pointer"
            onClick={() => navigate("/stress-relief/journaling")}
          />
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
                icon={faBook}
                className="text-2xl text-purple-500"
              />
            </div>
            <h1 className="text-2xl font-bold ml-4">Journaling</h1>
          </div>

          {/* Prompt Title */}
          <div className="border-2 border-dashed border-purple-300 rounded-lg p-3 w-full text-center mb-2">
            GRATEFULNESS
          </div>

          {/* Question */}
          <div className="flex items-center w-full mb-2">
            <span className="text-purple-500 font-bold mr-9 text-sm">
              {prompts[currentPromptIndex]}
            </span>
            <div className="border-2 border-purple-500 rounded-full p-1 bg-white w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faSyncAlt}
                className="text-purple-500 cursor-pointer"
                onClick={handleCyclePrompt}
              />
            </div>
          </div>

          {/* Text Area */}
          <div className="border-2 border-purple-300 rounded-lg p-4 w-full mb-4">
            <textarea
              className="w-full h-32 border-none outline-none resize-none text-sm"
              placeholder="Type here..."
            ></textarea>
          </div>

          {/* Add Photos */}
          <div className="flex items-center justify-center border-2 border-purple-300 rounded-lg p-4 w-full mb-4 cursor-pointer">
            <FontAwesomeIcon icon={faCamera} className="text-2xl mr-2" />
            <span className="text-sm">ADD PHOTOS</span>
          </div>

          {/* Save Button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleSave} // Show the pop-up on save
              className="bg-purple-500 text-white py-2 px-8 rounded-full h-[40px]"
            >
              SAVE
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>

      {/* Show Pop-Up */}
      {showPopUp && (
        <CompletionPopUp
          badgeName="GRATEFUL GURU"
          progress="1/5"
          progressPercentage={20}
          onClose={() => setShowPopUp(false)} // Close the pop-up
        />
      )}
    </div>
  );
};

export default GratefulnessJournal;
