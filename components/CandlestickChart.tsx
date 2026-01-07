'use client';

import { PERIOD_BUTTONS } from "@/constants";
import { useState } from "react";

const CandlestickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = 'daily'
}: CandlestickChartProps) => {
  const [loading, setloading] = useState(false);
  return (<div id="candlestickChart">
    <div className="chart-header">
      <div className="flex-1">{children}</div>

      <div className="button-group">
        <span className="text-sm mx-2 font-medium
        text-purple-100/50">Period:</span>
        {PERIOD_BUTTONS.map(({ value, label }) => (
          <button key={value} className="config-button" onClick={() => { }}
            disabled={loading}>
            {label}
          </button>
        ))}

      </div>
    </div>
  </div>
  );
};

export default CandlestickChart