import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faSpa,
  faPen,
  faSmile,
  faHeartbeat,
  faMusic,
  faBus,
  faInfoCircle,
  faBook,
  faWind,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import { useNavigate } from "react-router-dom";
import BackToHomeButton from "./misc/BackToHomeButton";

const StressReliefActivities: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white z-10 sticky top-2">
          <BackToHomeButton />
          <FontAwesomeIcon
            icon={faCog}
            className="text-gray-500 text-2xl pt-1 cursor-pointer"
            onClick={() => navigate("/settings")}
          />
        </div>

        {/* Scrollable Content- use overflow-y-auto */}
        <div className="flex-1 p-4">
          {/* Title Section */}
          <div className="flex items-center mb-4">
            <div className="bg-purple-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faBook}
                className="text-purple-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Journaling</h1>
          </div>

          {/* Free Style */}
          <div className="flex justify-center mb-4">
            <button className="bg-gray-200 text-purple-800 py-2 px-4 rounded-full flex items-center">
              <FontAwesomeIcon icon={faPen} className="mr-2 text-purple-800" />
              FREE STYLE
            </button>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <p className="text-gray-600 text-[10px]">
              or
              <br/>
              Choose one of our prompts to start reflecting
            </p>
          </div>

          {/* Journaling Prompts Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Anxiety Dialogue */}
            <div className="bg-gray-200 rounded-xl p-3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faBook}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-purple-600 text-sm font-semibold">Anxiety Dialogue</p>
            </div>

            {/* Morning */}
            <div className="bg-gray-200 rounded-2xl p-3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faWind}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-purple-600 text-sm font-semibold">Morning</p>
            </div>

            {/* Deep Dive */}
            <div className="bg-gray-200 rounded-2xl p-3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-purple-600 text-sm font-semibold">Deep Dive</p>
            </div>

            {/* Gratefulness */}
            <div className="bg-gray-200 rounded-2xl p-3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-purple-600 text-sm font-semibold">Gratefulness</p>
            </div>
            {/* Fear Face-Off */}
            <div className="bg-gray-200 rounded-2xl p-3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-purple-600 text-sm font-semibold">Fear Face-Off</p>
            </div>
            {/* Nature's Gifts */}
            <div className="bg-gray-200 rounded-2xl p-3 flex flex-col items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-purple-600 text-sm font-semibold">Nature's Gifts</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>
    </div>
  );
};

export default StressReliefActivities;
