import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Ensure the correct import
import React from "react";

interface CompletionPopUpProps {
  badgeName: string;
  progress: string; // Example: "2/5"
  progressPercentage: number; // Example: 40 for 40%
  onClose: () => void; // Function to close the pop-up
}

const CompletionPopUp: React.FC<CompletionPopUpProps> = ({
  badgeName,
  progress,
  progressPercentage,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[270px] text-center relative">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 rounded-full p-6 w-20 h-20 flex items-center justify-center">
            <FontAwesomeIcon icon={faCheck} className="text-white text-4xl" />
          </div>
        </div>

        {/* Badge Info */}
        <h1 className="text-xl font-bold mb-2">Activity Completed!</h1>
        <p className="text-gray-600 mb-4">+1 point</p>
        <div className="text-gray-600 mb-2">
          {badgeName} <span className="float-right">{progress}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* OK Button */}
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full w-1/2 h-[50px]"
          onClick={onClose}
        >
          OKAY
        </button>
      </div>
    </div>
  );
};

export default CompletionPopUp;
