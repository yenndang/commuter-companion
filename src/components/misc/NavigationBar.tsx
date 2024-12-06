import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faBolt,
  faMusic,
  faBus,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar: React.FC = () => {
  return (
    <div className="bg-white p-2 flex justify-around border-t border-gray-200 sticky bottom-0 z-10">
      <NavLink
        to="/mood-tracker"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "text-gray-600"
        }
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faSmile} className="text-xl" />
          </div>
          <p className="mt-1 text-[10px]">Mood</p>
        </div>
      </NavLink>

      <NavLink
        to="/stress-relief"
        className={({ isActive }) =>
          isActive ? "text-purple-500" : "text-gray-600"
        }
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faBolt} className="text-xl" />
          </div>
          <p className="mt-1 text-[10px]">Stress</p>
        </div>
      </NavLink>

      <NavLink
        to="/music-recommendation"
        className={({ isActive }) =>
          isActive ? "text-pink-500" : "text-gray-600"
        }
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faMusic} className="text-xl" />
          </div>
          <p className="mt-1 text-[10px]">Music</p>
        </div>
      </NavLink>

      <NavLink
        to="/my-commute"
        className={({ isActive }) =>
          isActive ? "text-blue-500" : "text-gray-600"
        }
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faBus} className="text-xl" />
          </div>
          <p className="mt-1 text-[10px]">MyCommute</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavigationBar;
