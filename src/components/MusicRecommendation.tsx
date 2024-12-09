import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCog,
  faMusic,
  faInfoCircle,
  faPlayCircle,
  faMicrophone,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "./misc/NavigationBar";
import BackToHomeButton from "./misc/BackToHomeButton";
import MusicFilterPopUp from "./popup/MusicFilterPopUp";

const MusicRecommendation: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false); // State to toggle filter pop-up
  const navigate = useNavigate(); // Initialize navigate function

  const handleFilterClick = () => {
    setShowFilter(true); // Show the filter pop-up
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Phone Container */}
      <div className="w-[300px] h-[650px] bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-300 flex flex-col relative">
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
        <div className="flex-1 p-4">
          {/* Title Section */}
          <div className="flex items-center mb-4">
            <div className="bg-pink-200 rounded-full p-4 w-15 h-15 flex">
              <FontAwesomeIcon
                icon={faMusic}
                className="text-pink-600 text-2xl"
              />
            </div>
            <h1 className="text-2xl font-bold ml-2">Music & Podcasts</h1>
          </div>

          {/* Info Section */}
          <div className="flex items-start mb-4">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-pink-600 text-sm mt-1 mr-2"
            />
            <p className="text-gray-500 text-[10px] w-[250px]">
              Play some music or listen to some podcasts based on your
              preferences!
            </p>
          </div>

          {/* Filter Button */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-400 text-[10px] w-[200px]">
              (Click the filter icon to update your preferences)
            </p>
            <div
              className="bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full shadow cursor-pointer"
              onClick={handleFilterClick}
            >
              <FontAwesomeIcon
                icon={faSlidersH}
                className="text-gray text-sm"
              />
            </div>
          </div>

          {/* Playlist/Podcast List */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="text-gray-500 text-sm mb-2">Pop</div>
            <div className="text-lg font-bold mb-4">Upbeat</div>
            <hr className="border-gray-200 mb-2" />
            <div className="space-y-4">
              {/* Playlist Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="text-xl text-gray-500"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-sm">Lorde Playlist</div>
                    <div className="text-gray-400 text-xs">32 Minutes</div>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="text-2xl text-gray-500"
                />
              </div>
              {/* Podcast Item */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="text-xl text-gray-500"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-sm">SmartLess</div>
                    <div className="text-gray-400 text-xs">
                      1 Hour, 2 Minutes
                    </div>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="text-2xl text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Player Section */}
          <div className="bg-pink-200 rounded-[200px] p-2 flex items-center justify-between mb-4">
            <audio
              controls
              className="w-full"
              style={{ height: "30px", borderRadius: "5px" }}
            >
              <source
                src="https://www.example.com/audio.mp3"
                type="audio/mp3"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Footer Navigation */}
        <NavigationBar />
      </div>

      {/* Music Filter Pop-Up */}
      {showFilter && (
        <MusicFilterPopUp
          onClose={() => setShowFilter(false)}
          onSearch={(filters) => console.log(filters)} // Placeholder for search functionality
        />
      )}
    </div>
  );
};

export default MusicRecommendation;
