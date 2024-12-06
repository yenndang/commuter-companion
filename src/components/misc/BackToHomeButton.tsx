import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BackToHomeButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <FontAwesomeIcon
      icon={faArrowLeft}
      className="text-gray-500 text-2xl cursor-pointer"
      onClick={() => navigate("/")} // Navigate to the home screen
    />
  );
};

export default BackToHomeButton;
