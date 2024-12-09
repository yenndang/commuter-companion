import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import MyCommute from "./components/MyCommute";
import MoodTracker from "./components/MoodTracker";
import StressRelief from "./components/StressRelief";
import MusicRecommendation from "./components/MusicRecommendation";
import SettingsScreen from "./components/SettingsScreen";
import SRDeepBreathing from "./components/SR_DeepBreathing";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/my-commute" element={<MyCommute />} />
      <Route path="/mood-tracker" element={<MoodTracker />} />
      <Route path="/stress-relief" element={<StressRelief />} />
      <Route
        path="/stress-relief/deep-breathing"
        element={<SRDeepBreathing />}
      />
      <Route path="/music-recommendation" element={<MusicRecommendation />} />
      <Route path="/settings" element={<SettingsScreen />} />
    </Routes>
  );
};

export default App;
