import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSmile,
  faChartBar,
  faAward,
  faBus,
  faHome,
  faHeartbeat,
  faMusic,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";

const HomeScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start p-4 bg-white z-10 sticky top-2">
          <h1 className="text-3xl font-bold">Commuter Companion</h1>
          <FontAwesomeIcon
            icon={faCog}
            className="text-gray-500 text-2xl pt-1"
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Welcome Section */}
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faHome} className="text-xl mr-2" />
            <span className="text-lg">Welcome, John!</span>
          </div>

          {/* Points and Badges */}
          <div className="flex justify-around mb-4">
            <div className="bg-green-200 rounded-lg p-4 text-left w-1/2 mr-2">
              <FontAwesomeIcon icon={faChartBar} className="text-4xl mb-2" />
              <div className="text-3xl font-bold">20</div>
              <div className="text-[10px]">POINTS EARNED</div>
            </div>
            <div className="bg-yellow-200 rounded-lg p-4 text-left w-1/2 ml-2">
              <FontAwesomeIcon icon={faAward} className="text-4xl mb-2" />
              <div className="text-3xl font-bold">2</div>
              <div className="text-[10px]">BADGES EARNED</div>
            </div>
          </div>

          {/* Nearby Transit Lines */}
          <h2 className="text-xl font-bold mb-4">Nearby transit lines</h2>
          <div className="space-y-4">
            {/* Transit Line 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  GL
                </div>
                <div>
                  <div className="font-bold text-sm">West to Health Street</div>
                  <div className="text-gray-500 text-xs">
                    Northeastern University
                  </div>
                </div>
              </div>
              <div className="text-base font-bold">2 mins</div>
            </div>
            {/* Transit Line 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center ">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  GL
                </div>
                <div>
                  <div className="font-bold text-sm">East to Medford/Tufts</div>
                  <div className="text-gray-500 text-xs">
                    Northeastern University
                  </div>
                </div>
              </div>
              <div className="text-base font-bold">5 mins</div>
            </div>
            {/* Transit Line 3 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  OL
                </div>
                <div>
                  <div className="font-bold text-sm">North to Oak Grove</div>
                  <div className="text-gray-500 text-xs">Ruggles</div>
                </div>
              </div>
              <div className="text-base font-bold">10 mins</div>
            </div>
            {/* Transit Line 4 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faBus} className="text-lg" />
                </div>
                <div>
                  <div className="font-bold text-sm">39 Forest Hills</div>
                  <div className="text-gray-500 text-xs">
                    Huntington Ave/Forsyth Way
                  </div>
                </div>
              </div>
              <div className="text-base font-bold">4 mins</div>
            </div>
            {/* Transit Line 5 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <FontAwesomeIcon icon={faTrain} className="text-lg" />
                </div>
                <div>
                  <div className="font-bold text-sm">609 Needham Heights</div>
                  <div className="text-gray-500 text-xs">Ruggles</div>
                </div>
              </div>
              <div className="text-base font-bold">8 mins</div>
            </div>
            {/* Add other transit lines? */}
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
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-md">
              <FontAwesomeIcon
                icon={faHeartbeat}
                className="text-xl text-gray-600"
              />
            </div>
            <p className="mt-1 text-gray-600 text-[10px]">Stress</p>
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

export default HomeScreen;
