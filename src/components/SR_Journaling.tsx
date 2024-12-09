import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faPen,
  faBook,
  faComments,
  faCoffee,
  faBrain,
  faPrayingHands,
  faFrown,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import { useNavigate } from "react-router-dom";

const SRJournaling: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const handleGratefulnessClick = () => {
    navigate("/stress-relief/journaling/gratefulness"); // Navigate to the GratefulnessJournal component
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white z-10 sticky top-2">
          <button
            onClick={() => navigate("/stress-relief")} // Navigate back to StressRelief screen
            className="text-gray-500 text-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>{" "}
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
            <div className="bg-purple-100 rounded-full p-4 w-15 h-15 flex">
              <FontAwesomeIcon
                icon={faBook}
                className="text-purple-400 text-3xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Journaling</h1>
          </div>

          {/* Free Style */}
          <div className="flex justify-center mb-2">
            <button className="border-2 border-purple-400 text-purple-400 rounded-full px-8 py-2 flex items-center">
              <FontAwesomeIcon icon={faPen} className="mr-2 text-purple-400" />
              FREE STYLE
            </button>
          </div>

          {/* Info Section */}
          <div className="text-center mb-4">
            <p className="text-gray-500 text-[10px] w-[250px]">or</p>
            <p className="text-gray-500 text-[10px] ">
              Choose one of our prompts to start reflecting
            </p>
          </div>

          {/* Journaling Prompts Grid */}
          <div className="grid grid-cols-2 gap-2">
            {/* Anxiety Dialogue */}
            <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg p-2">
              <FontAwesomeIcon
                icon={faComments}
                className="text-purple-400 text-3xl mb-2"
              />
              <p className="text-purple-400 text-xs font-semibold">
                Anxiety Dialogue
              </p>
            </div>

            {/* Morning */}
            <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg p-2">
              <FontAwesomeIcon
                icon={faCoffee}
                className="text-purple-400 text-3xl mb-2"
              />
              <p className="text-purple-400 text-sm font-semibold">Morning</p>
            </div>

            {/* Deep Dive */}
            <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg p-2">
              <FontAwesomeIcon
                icon={faBrain}
                className="text-purple-400 text-3xl mb-2"
              />
              <p className="text-purple-400 text-sm font-semibold">Deep Dive</p>
            </div>

            {/* Gratefulness */}
            <div
              className="flex flex-col items-center border-2 border-purple-400 rounded-lg p-2 cursor-pointer"
              onClick={handleGratefulnessClick} // Trigger navigate on click
            >
              <FontAwesomeIcon
                icon={faPrayingHands}
                className="text-purple-400 text-3xl mb-2"
              />
              <p className="text-purple-400 text-sm font-semibold">
                Gratefulness
              </p>
            </div>

            {/* Fear Face-Off */}
            <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg p-2">
              <FontAwesomeIcon
                icon={faFrown}
                className="text-purple-400 text-3xl mb-2"
              />
              <p className="text-purple-400 text-sm font-semibold">
                Fear Face-Off
              </p>
            </div>

            {/* Nature's Gifts */}
            <div className="flex flex-col items-center border-2 border-purple-400 rounded-lg p-2">
              <FontAwesomeIcon
                icon={faTree}
                className="text-purple-400 text-3xl mb-2"
              />
              <p className="text-purple-400 text-sm font-semibold">
                Nature's Gifts
              </p>
            </div>
          </div>
        </div>
        {/* Centered More Button */}
        <div className="flex justify-center mb-4">
          <button className="border-2 border-purple-500 text-purple-500 rounded-full px-10 py-1 text-xs font-semibold">
            MORE
          </button>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>
    </div>
  );
};

export default SRJournaling;
