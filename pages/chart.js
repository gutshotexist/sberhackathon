import React from "react";
import BatchHistoryPrice from "../components/historyprice";
import NavBar from "../components/NavBar";

const Chart = () => {
  const symbolCode = 1; // replace with actual symbolCode
  const roundId = 10; // replace with actual roundId
  const maxRounds = 10; // replace with actual maxRounds

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <div className="pt-10">
        <BatchHistoryPrice
          symbolCode={symbolCode}
          roundId={roundId}
          maxRounds={maxRounds}
        />
      </div>
    </div>
  );
};

export default Chart;
