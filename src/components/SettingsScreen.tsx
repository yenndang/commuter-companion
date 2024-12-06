import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMapMarkerAlt,
  faBell,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const SettingsScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-white sticky top-0 z-10">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-gray-500 text-2xl mb-4"
          />
          <h1 className="text-2xl font-bold text-center">Settings</h1>
        </div>

        {/* User Info Section */}
        <div className="flex flex-col items-center mt-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-2xl text-white font-bold">
            {/* Placeholder for User Avatar */}
            <span>👤</span>
          </div>
          <h2 className="text-lg font-bold mt-2">John</h2>
          <p className="text-gray-500 text-xs">john.doe@gmail.com</p>
        </div>

        <hr className="border-gray-200 my-2" />

        {/* Options Section */}
        <div className="flex-1 p-4">
          {/* City/Transit System */}
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-gray-500 text-lg mr-4"
              />
              <p className="text-lg font-medium">City/Transit System</p>
            </div>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-gray-400 rotate-180"
            />
          </div>

          {/* Notifications */}
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBell}
                className="text-gray-500 text-lg mr-4"
              />
              <p className="text-lg font-medium">Notifications</p>
            </div>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-gray-400 rotate-180"
            />
          </div>

          {/* About */}
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="text-gray-500 text-lg mr-4"
              />
              <p className="text-lg font-medium">About</p>
            </div>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-gray-400 rotate-180"
            />
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="p-4 flex justify-center">
          <button className="w-2/4 bg-black text-white py-3 rounded-full">
            SIGN OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
