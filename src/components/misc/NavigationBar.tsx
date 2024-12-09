import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faMusic, faBus } from "@fortawesome/free-solid-svg-icons";

const NavigationBar: React.FC = () => {
  return (
    <div className="bg-white p-2 flex justify-around border-t border-gray-200 sticky bottom-0 z-10">
      <NavLink
        to="/mood-tracker"
        className={({ isActive }) =>
          isActive ? "text-gray-600" : "text-gray-600"
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md ${
                isActive ? "bg-yellow-300" : "bg-white"
              }`}
            >
              <img
                src="/images/smiley.svg"
                alt="Mood"
                className="w-6 h-6 transition-all duration-300"
              />
            </div>
            <p
              className={`mt-1 text-[10px] ${
                isActive ? "text-yellow-500" : "text-gray-600"
              }`}
            >
              Mood
            </p>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/stress-relief"
        className={({ isActive }) =>
          isActive ? "text-purple-500" : "text-gray-600"
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md ${
                isActive ? "bg-purple-200" : "bg-white"
              }`}
            >
              <img
                src="/images/stress-relief.svg"
                alt="Stress"
                className="w-6 h-6 transition-all duration-300"
              />
            </div>
            <p
              className={`mt-1 text-[10px] ${
                isActive ? "text-purple-500" : "text-gray-600"
              }`}
            >
              Stress
            </p>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/music-recommendation"
        className={({ isActive }) =>
          isActive ? "text-pink-500" : "text-gray-600"
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md ${
                isActive ? "bg-pink-200" : "bg-white"
              }`}
            >
              <img
                src="/images/music.svg"
                alt="Music"
                className="w-6 h-6 transition-all duration-300"
              />
            </div>
            <p
              className={`mt-1 text-[10px] ${
                isActive ? "text-pink-500" : "text-gray-600"
              }`}
            >
              Music
            </p>
          </div>
        )}
      </NavLink>

      <NavLink
        to="/my-commute"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-600"
        }
      >
        {({ isActive }) => (
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md ${
                isActive ? "bg-blue-200" : "bg-white"
              }`}
            >
              <img
                src="/images/commute.svg"
                alt="Commute"
                className="w-6 h-6 transition-all duration-300"
              />{" "}
            </div>
            <p
              className={`mt-1 text-[10px] ${
                isActive ? "text-blue-500" : "text-gray-600"
              }`}
            >
              MyCommute
            </p>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default NavigationBar;
