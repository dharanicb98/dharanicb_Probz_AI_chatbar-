import React from "react";
import "../styles/TimeframeSelector.css";

interface TimeframeSelectorProps {
  onSelect: (timeframe: "daily" | "weekly" | "monthly") => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({ onSelect }) => (
  <div className="timeframe-selector">
    <button onClick={() => onSelect("daily")}>Daily</button>
    <button onClick={() => onSelect("weekly")}>Weekly</button>
    <button onClick={() => onSelect("monthly")}>Monthly</button>
  </div>
);

export default TimeframeSelector;
