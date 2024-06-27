import React, { useState } from "react";
import Chart from "./components/Chart";
import TimeframeSelector from "./components/TimeframeSelector";
import Logo from "./components/Logo";
import "./App.css";

const App: React.FC = () => {
  const [timeframe, setTimeframe] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <Logo />
          <span className="chart-name">Chart Application</span>
        </div>
      </header>
      <main>
        <TimeframeSelector onSelect={setTimeframe} />
        <div className="chart-container">
          <Chart timeframe={timeframe} />
        </div>
      </main>
    </div>
  );
};

export default App;
