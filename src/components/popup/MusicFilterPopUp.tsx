import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faChevronDown,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

interface MusicFilterPopUpProps {
  onClose: () => void; // Function to close the pop-up
  onSearch: (filters: {
    mood: string[];
    genre: string[];
    duration: string;
  }) => void; // Callback with filter values
}

const MusicFilterPopUp: React.FC<MusicFilterPopUpProps> = ({
  onClose,
  onSearch,
}) => {
  const [mood, setMood] = useState<string[]>([]); // Multi-select for Mood
  const [genre, setGenre] = useState<string[]>([]); // Multi-select for Genre
  const [duration, setDuration] = useState<string>("30 mins"); // Single-select for Duration

  const toggleSelection = (
    selection: string,
    currentList: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (currentList.includes(selection)) {
      setList(currentList.filter((item) => item !== selection));
    } else {
      setList([...currentList, selection]);
    }
  };

  const handleSearch = () => {
    onSearch({ mood, genre, duration });
    onClose(); // Close pop-up after search
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[300px] text-center relative">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <FontAwesomeIcon
            icon={faSlidersH}
            className="text-gray-500 text-xl mr-2"
          />
          <h2 className="text-lg font-bold">Customize Your Playlist</h2>
        </div>
        <div className="flex items-start mb-4">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-pink-600 text-sm mt-1 mr-2"
          />
          <p className="text-gray-500 text-[10px] w-[250px]">
            Click the expand icon for more options and refine your playlist for
            the better experience.
          </p>
        </div>
        {/* Mood Selection */}
        <div className="text-left">
          <label className="block text-gray-700 mb-2">Mood:</label>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {["Uplifting", "Calm", "Energetic", "Focused"].map((m) => (
              <button
                key={m}
                className={`px-2 py-1 rounded-full border ${
                  mood.includes(m)
                    ? "bg-pink-300 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => toggleSelection(m, mood, setMood)}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-gray-500 text-lg cursor-pointer"
              title="Expand Mood Options"
            />
          </div>
        </div>

        {/* Genre Selection */}
        <div className="text-left">
          <label className="block text-gray-700 mb-2">Genre:</label>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {["Pop", "Rock", "Jazz", "Classical"].map((g) => (
              <button
                key={g}
                className={`px-2 py-1 rounded-full border ${
                  genre.includes(g)
                    ? "bg-pink-300 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => toggleSelection(g, genre, setGenre)}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-gray-500 text-lg cursor-pointer"
              title="Expand Genre Options"
            />
          </div>
        </div>

        {/* Duration Selection */}
        <div className="text-left">
          <label className="block text-gray-700 mb-2">Duration:</label>
          <select
            className="w-full border border-gray-300 rounded-xl p-2 mb-5"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="15 mins">15 mins</option>
            <option value="30 mins">30 mins</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-gray-300 text-gray-700 py-3 px-4 rounded-full w-1/2 mr-2"
            onClick={onClose}
          >
            CANCEL
          </button>
          <button
            className="bg-pink-500 text-white py-3 px-4 rounded-full w-1/2"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicFilterPopUp;
