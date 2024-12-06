import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faTrain,
  faCircleExclamation,
  faPlus,
  faSmile,
  faBolt,
  faMusic,
  faBus,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import { useNavigate } from "react-router-dom";
import BackToHomeButton from "./misc/BackToHomeButton";

const MyCommute: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [favoriteLines, setFavoriteLines] = useState<{
    [key: string]: boolean;
  }>({
    "West to Health Street": false,
    "East to Medford/Tufts": true,
    "North to Oak Grove": true,
    "39 Forest Hills": false,
  });

  const toggleFavorite = (line: string) => {
    setFavoriteLines((prevState) => ({
      ...prevState,
      [line]: !prevState[line],
    }));
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Title Section */}
          <div className="flex items-center mb-4">
            <div className="bg-blue-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faTrain}
                className="text-blue-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">MyCommute</h1>
          </div>

          {/* Favorite Routes Section */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">My favorite routes</h2>
            <div className="bg-blue-200 w-8 h-8 flex items-center justify-center rounded-full shadow">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-black-600 text-lg"
              />
            </div>
          </div>
          <div className="flex items-start text-[10px] mb-4">
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className="text-blue-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-500">
              You can add your favorite routes here and get real-time alerts
              about issues on the lines, helping you plan ahead and feel more at
              ease during your public transit commute.
            </p>
          </div>

          {/* Favorite Routes List */}
          <div className="bg-white border rounded-lg p-3 mb-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="bg-green-800 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
                  GL
                </div>
                <div>
                  <h3 className="text-sm">East to Medford/Tufts</h3>
                  <p className="text-gray-500 text-[10px]">
                    Northeastern University
                  </p>
                </div>
              </div>
              <p className="text-sm">
                <span className="font-bold">5 </span>mins
              </p>
            </div>
            <hr className="border-gray-200 my-2" />
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                className="text-yellow-600 text-lg mt-1 mr-2"
              />
              <p className="text-gray-500 text-[10px]">
                No train service between Medford/Tufts, Union Square, and Park
                St, December 6 - 20, for track work. Use shuttle buses between
                Medford/Tufts & North Station, or the Orange Line downtown.
                Shuttles will not service Union Sq - use Routes 86 & 91.
              </p>
            </div>
          </div>
          <div className="width-2/3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
                OL
              </div>
              <div>
                <h3 className="text-sm">North to Oak Grove</h3>
                <p className="text-gray-500 text-[10px]">Ruggles</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm">
                <span className="font-bold">10 </span>mins
              </p>
            </div>
          </div>

          {/* Nearby Transit Lines Section */}
          <h2 className="text-lg font-bold mb-2">Nearby transit lines</h2>
          <div className="space-y-4">
            {/* Transit Line 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-green-800 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
                  GL
                </div>
                <div>
                  <h3 className="text-sm">West to Health Street</h3>
                  <p className="text-gray-500 text-[10px]">
                    Northeastern University
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm">
                  <span className="font-bold">2 </span>mins
                </p>
                <FontAwesomeIcon
                  icon={
                    favoriteLines["West to Health Street"]
                      ? faStarFilled
                      : faStarOutline
                  }
                  className={`text-lg ${
                    favoriteLines["West to Health Street"]
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } cursor-pointer`}
                  onClick={() => toggleFavorite("West to Health Street")}
                />
              </div>
            </div>

            {/* Transit Line 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-green-800 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
                  GL
                </div>
                <div>
                  <h3 className="text-sm">East to Medford/Tufts</h3>
                  <p className="text-gray-500 text-[10px]">
                    Northeastern University
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm">
                  <span className="font-bold">5 </span>mins
                </p>
                <FontAwesomeIcon
                  icon={
                    favoriteLines["East to Medford/Tufts"]
                      ? faStarFilled
                      : faStarOutline
                  }
                  className={`text-lg ${
                    favoriteLines["East to Medford/Tufts"]
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } cursor-pointer`}
                  onClick={() => toggleFavorite("East to Medford/Tufts")}
                />
              </div>
            </div>

            {/* Transit Line 3 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-orange-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
                  OL
                </div>
                <div>
                  <h3 className="text-sm">North to Oak Grove</h3>
                  <p className="text-gray-500 text-[10px]">Ruggles</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm">
                  <span className="font-bold">10 </span>mins
                </p>
                <FontAwesomeIcon
                  icon={
                    favoriteLines["North to Oak Grove"]
                      ? faStarFilled
                      : faStarOutline
                  }
                  className={`text-lg ${
                    favoriteLines["North to Oak Grove"]
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } cursor-pointer`}
                  onClick={() => toggleFavorite("North to Oak Grove")}
                />
              </div>
            </div>

            {/* Transit Line 4 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-2">
                  <FontAwesomeIcon icon={faBus} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm">39 Forest Hills</h3>
                  <p className="text-gray-500 text-[10px]">Ruggles</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm">
                  <span className="font-bold">10 </span>mins
                </p>
                <FontAwesomeIcon
                  icon={
                    favoriteLines["39 Forest Hills"]
                      ? faStarFilled
                      : faStarOutline
                  }
                  className={`text-lg ${
                    favoriteLines["39 Forest Hills"]
                      ? "text-yellow-500"
                      : "text-gray-400"
                  } cursor-pointer`}
                  onClick={() => toggleFavorite("39 Forest Hills")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>
    </div>
  );
};

export default MyCommute;
