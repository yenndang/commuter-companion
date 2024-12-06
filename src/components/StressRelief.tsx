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
} from "@fortawesome/free-solid-svg-icons";

const StressReliefActivities: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-white z-10 sticky top-2">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-500 text-2xl"
          />
          <FontAwesomeIcon icon={faCog} className="text-gray-500 text-2xl" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Title Section */}
          <div className="flex items-center mb-4">
            <div className="bg-purple-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faSpa}
                className="text-purple-600 text-2xl"
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
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-purple-200 rounded-2xl p-3 flex flex-col items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Journaling icon"
                className="mb-2"
              />
              <p className="text-xs">JOURNALING</p>
            </div>
            <div className="bg-purple-200 rounded-2xl p-3 flex flex-col items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Deep Breathing icon"
                className="mb-2"
              />
              <p className="text-xs">DEEP BREATHING</p>
            </div>
            <div className="bg-purple-200 rounded-2xl p-3 flex flex-col items-center">
              <img
                src="https://placehold.co/50x50"
                alt="Guided Mindfulness icon"
                className="mb-auto"
              />
              <p className="text-xs">GUIDED MINDFULNESS</p>
            </div>
            <div className="bg-purple-200 rounded-2xl p-3 flex flex-col items-center justify-between">
              <img
                src="https://placehold.co/50x50"
                alt="Positive News icon"
                className="mb-auto"
              />
              <p className="text-xs">POSITIVE NEWS</p>
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
        <div className="bg-white p-2 flex justify-around border-t border-gray-200 sticky bottom-0 z-10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
              <FontAwesomeIcon
                icon={faSmile}
                className="text-xl text-gray-600"
              />
            </div>
            <p className="mt-1 text-gray-600 text-[10px]">Mood</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-200 rounded-lg shadow-md">
              <FontAwesomeIcon
                icon={faHeartbeat}
                className="text-xl text-purple-600"
              />
            </div>
            <p className="mt-1 text-purple-600 text-[10px]">Stress</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
              <FontAwesomeIcon
                icon={faMusic}
                className="text-xl text-gray-600"
              />
            </div>
            <p className="mt-1 text-gray-600 text-[10px]">Music</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
              <FontAwesomeIcon icon={faBus} className="text-xl text-gray-600" />
            </div>
            <p className="mt-1 text-gray-600 text-[10px]">MyCommute</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StressReliefActivities;
