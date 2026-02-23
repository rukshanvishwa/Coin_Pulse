'use client';

import { getChartConfig, PERIOD_BUTTONS, PERIOD_CONFIG } from "@/constants";
import { fetcher } from "@/lib/coingecko.actions";
import { createChart, IChartApi, ISeriesApi } from "lightweight-charts";
import { use, useEffect, useRef, useState, useTransition } from "react";
import { start } from "repl";


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
  const[ohlcData, setOhlcData]=useState<OHLCData[]>(data ??[]);
  const[isPending, startTransition]=useTransition()

  const fetchOHLCData = async (selectedPeriod:Period) => {
    try{
      const {days, interval}=PERIOD_CONFIG[selectedPeriod];

     const newData = await fetcher<OHLCData[]>(`/coins/${coinId}/ohlc`, {
                  vs_currency: 'usd',
                  days,
                  interval,
                  precision: 'full',
              })

              setOhlcData(newData ?? [])
    }catch(e){
      console.error('Failed to fetch OHLC data:', e);
    }
  }
    

  const handlePeriodChange = (newPeriod:Period) => {
    if(newPeriod===period) return;
    startTransition(async()=>{
      setPeriod(newPeriod);
      await fetchOHLCData(newPeriod);
  });

 useEffect(()=>{ 
  const container = chartContainerRef.current;
  if(!container) return;
  const showTime=['daily', 'weekly', 'monthly'].includes(period);

  const chart = createChart(container, {
    ...getChartConfig(height, showTime),
    width: container.clientWidth,
  })

 }, [height])
  }
  return (<div id="candlestickChart">
    <div className="chart-header">
      <div className="flex-1">{children}</div>

      <div className="button-group">
        <span className="text-sm mx-2 font-medium
        text-purple-100/50">Period:</span>
        {PERIOD_BUTTONS.map(({ value, label }) => (
          <button 
          key={value} 
          className={period===value ? 'config-button active' : 
            'config-button'} 
          onClick={() => handlePeriodChange(value)}
            disabled={loading}
             >
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