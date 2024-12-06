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
                icon={faEnvelope}
                className="text-purple-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Positive News</h1>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-purple-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-600 text-[10px]">
              Read positive news stories to brighten your day!
            </p>
          </div>
           {/* Link to Good News web page */}
          <iframe
            title="Good News Network"
            src="https://www.goodnewsnetwork.org/category/news/"
            width="100%"
            height="100%"
            style={{border: 'none'}}
          />
        </div>



        {/* Footer Navigation */}
        <NavigationBar />
      </div>
    </div>
  );
};

export default StressReliefActivities;
