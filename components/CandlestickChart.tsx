'use client';

import { PERIOD_BUTTONS } from "@/constants";
import { IChartApi, ISeriesApi } from "lightweight-charts";
import { useRef, useState } from "react";

const CandlestickChart = ({
  children,
  data,
  coinId,
  height = 360,
  initialPeriod = 'daily'
}: CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  const [loading, setLoading] = useState(false);
  const[period, setPeriod]=useState(initialPeriod);
  const[ohlcData, setOhlcData]=useState<OHLCData[]>(data??[]);

  const fetchOHLCData = async (selectedPeriod:Period) => {
    try{

    }catch(e){
      
    }
  }
    

  const handlePeriodChange = (newPeriod:Period) => {
    if(newPeriod===period) return;
    //TODO UPDATE PERIOD
    setPeriod(newPeriod);
  };

  return (<div id="candlestickChart">
    <div className="chart-header">
      <div className="flex-1">{children}</div>

      <div className="button-group">
        <span className="text-sm mx-2 font-medium
        text-purple-100/50">Period:</span>
        {PERIOD_BUTTONS.map(({ value, label }) => (
          <button key={value} className={period===value? 'config-button active' : 
            'config-button'} 
          onClick={() => handlePeriodChange(value)}
            disabled={loading}>
            {label}
          </button>
        ))}

      </div>
    </div>

    <div ref={chartContainerRef} className="chart" style={{height}} />
  </div>
  );
};

export default CandlestickChart