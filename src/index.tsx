import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./components/HomeScreen";
import StressReliefActivities from "./components/StressRelief";
import MusicRecommendation from "./components/MusicRecommendation";
import MyCommute from "./components/MyCommute";
import MoodTracker from "./components/MoodTracker";
import SettingsScreen from "./components/SettingsScreen";
import SRDeepBreathing from "./components/SR_DeepBreathing";
import SRJournaling from "./components/SR_Journaling";
import GuidedMindfulness from "./components/SR_GuidedMindfulness";
import PositiveNews from "./components/SR_PositiveNews";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
