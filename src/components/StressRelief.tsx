import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faInfoCircle,
  faSpa,
  faPen,
  faSmile,
  faHeartbeat,
  faMusic,
  faBus,
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

  const handleDeepBreathingClick = () => {
    navigate("/stress-relief/deep-breathing"); // Navigate to the SRDeepBreathing component
  };

  const handleJournalingClick = () => {
    navigate("/stress-relief/journaling"); // Navigate to the SRJournaling component
  };

  const handleGuidedMindfulnessClick = () => {
    navigate("/stress-relief/guided-mindfulness"); // Navigate to the GuidedMindfulness component
  };

  const handlePositiveNewsClick = () => {
    navigate("/stress-relief/positive-news"); // Navigate to the PositiveNews component
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white sticky top-0 z-10">
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
            <div className="bg-purple-200 rounded-full p-4 w-15 h-15 flex">
              <img
                src="/images/stress-relief.svg"
                alt="Stress"
                className="w-6 h-6 transition-all duration-300"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Stress Relief</h1>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-purple-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-600 text-[10px]">
              Select an activity to unwind—journaling, breathing exercises,
              mindfulness, or positive news—and earn points for rewards and
              badges while making stress management fun!
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {/* Journaling */}
            <div
              className="bg-purple-200 rounded-2xl p-6 flex flex-col items-center cursor-pointer"
              onClick={handleJournalingClick} // Trigger navigate on click
            >
              <FontAwesomeIcon
                icon={faBook}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-sm font-semibold text-center">JOURNALING</p>
            </div>

            {/* Deep Breathing */}
            <div
              className="bg-purple-200 rounded-2xl p-6 flex flex-col items-center cursor-pointer"
              onClick={handleDeepBreathingClick} // Trigger navigate on click
            >
              <FontAwesomeIcon
                icon={faWind}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-sm font-semibold text-center">
                DEEP BREATHING
              </p>
            </div>

            {/* Guided Mindfulness */}
            <div
              className="bg-purple-200 rounded-2xl p-6 flex flex-col items-center cursor-pointer"
              onClick={handleGuidedMindfulnessClick} // Trigger navigate on click
            >
              <FontAwesomeIcon
                icon={faSpa}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-sm font-semibold text-center">
                GUIDED MINDFULNESS
              </p>
            </div>

            {/* Positive News */}
            <div
              className="bg-purple-200 rounded-2xl p-6 flex flex-col items-center cursor-pointer"
              onClick={handlePositiveNewsClick}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-purple-600 text-4xl mb-2"
              />
              <p className="text-sm font-semibold text-center">POSITIVE NEWS</p>
            </div>
          </div>

          {/* Feedback Button */}
          <div className="flex justify-center mb-4">
            <button className="bg-purple-200 text-purple-800 py-2 px-4 rounded-full flex items-center">
              <FontAwesomeIcon icon={faPen} className="mr-2 text-purple-800" />
              FEEDBACK
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>
    </div>
  );
};

export default StressReliefActivities;
