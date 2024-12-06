import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomeScreen from "./components/HomeScreen";
import StressReliefActivities from "./components/StressRelief";
import MusicRecommendation from "./components/MusicRecommendation";
import MyCommute from "./components/MyCommute";
import MoodTracker from "./components/MoodTracker";
import SettingsScreen from "./components/SettingsScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <HomeScreen />
    <StressReliefActivities />
    <MusicRecommendation />
    <MyCommute />
    <MoodTracker />
    <SettingsScreen />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
