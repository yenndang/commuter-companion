import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faInfoCircle,
  faSmile,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import CompletionPopUp from "./popup/CompletionPopUp";
import { useNavigate } from "react-router-dom";
import BackToHomeButton from "./misc/BackToHomeButton";

const MoodTracker: React.FC = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<number | null>(null); // Track selected emoji
  const [showPopUp, setShowPopUp] = useState(false); // Control pop-up visibility

  const handleSave = () => {
    // Show the completion pop-up
    setShowPopUp(true);
  };

  const moods = ["😡", "☹️", "😐", "🙂", "😊"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white sticky top-0 z-10">
          <BackToHomeButton />
          <FontAwesomeIcon
            icon={faCog}
            className="text-gray-500 text-2xl pt-1 cursor-pointer"
            onClick={() => navigate("/settings")}
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Title Section */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-yellow-200 rounded-full p-4 w-15 h-15 flex">
                <FontAwesomeIcon
                  icon={faSmile}
                  className="text-xl text-yellow-500"
                />
              </div>
              <h1 className="text-2xl font-bold ml-2">Mood Tracker</h1>
            </div>
            <div className="cursor-pointer border-2 border-yellow-500 rounded-full p-1 w-8 h-8 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faChartBar}
                className="text-yellow-500 text-lg"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-yellow-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-500 text-[10px]">
              Keep tracking your mood to know how to improve your mental health.
            </p>
          </div>

          {/* Mood Selection */}
          <h2 className="text-sm font-bold mb-2">How do you feel today?</h2>
          <div className="flex justify-between mb-4">
            {moods.map((emoji, index) => (
              <div
                key={index}
                onClick={() => setSelectedMood(index)}
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow cursor-pointer ${
                  selectedMood === index
                    ? "bg-yellow-400 scale-110 transform transition-all"
                    : "bg-gray-200"
                }`}
              >
                <span
                  className={`text-4xl ${
                    selectedMood === index ? "text-4xl" : ""
                  }`}
                >
                  {emoji}
                </span>
              </div>
            ))}
          </div>

          {/* Reflection Text Area */}
          <textarea
            placeholder="Reflect on your feelings here..."
            className="w-full h-20 border rounded-lg p-2 text-xs text-gray-500 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-200"
          ></textarea>

          {/* Buttons */}
          <div className="space-y-2 flex flex-col items-center">
            <button
              onClick={handleSave}
              className="w-2/4 bg-yellow-400 text-white font-bold py-3 rounded-full"
            >
              SAVE
            </button>
            <button
              onClick={() => navigate("/")} // Navigate back to the Home screen
              className="w-2/4 border border-gray-300 text-gray-500 font-bold py-3 rounded-full"
            >
              CANCEL
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>

      {/* Completion Pop-Up */}
      {showPopUp && (
        <CompletionPopUp
          badgeName="MOOD EXPLORER"
          progress="4/5"
          progressPercentage={80} // Adjust based on progress
          onClose={() => setShowPopUp(false)}
        />
      )}
    </div>
  );
};

export default MoodTracker;
