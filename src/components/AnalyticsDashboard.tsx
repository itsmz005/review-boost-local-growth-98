
import { Card } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';

const AnalyticsDashboard = () => {
  // Simulated data points for the graph
  const dataPoints = [
    { date: '2024-01', value: 15 },
    { date: '2024-02', value: 18 },
    { date: '2024-03', value: 22 },
    { date: '2024-04', value: 28 },
    { date: '2024-05', value: 35 },
    { date: '2024-06', value: 42 },
    { date: '2024-07', value: 48 },
    { date: '2024-08', value: 52 },
    { date: '2024-09', value: 58 },
    { date: '2024-10', value: 62 },
    { date: '2024-11', value: 67 },
    { date: '2024-12', value: 73 }
  ];

  const maxValue = Math.max(...dataPoints.map(d => d.value));
  
  // Create SVG path for the line chart
  const createPath = () => {
    const width = 800;
    const height = 200;
    const padding = 40;
    
    const points = dataPoints.map((point, index) => {
      const x = padding + (index * (width - 2 * padding) / (dataPoints.length - 1));
      const y = height - padding - ((point.value / maxValue) * (height - 2 * padding));
      return `${x},${y}`;
    });
    
    return `M${points.join(' L')}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-slate-900 border-slate-800 p-8 rounded-3xl overflow-hidden">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-xl font-semibold">Active Reviews Over Time - TeamLogic IT</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-400 text-sm">Active Reviews</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <svg viewBox="0 0 800 200" className="w-full h-48">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="80" height="20" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Chart line */}
            <path
              d={createPath()}
              fill="none"
              stroke="rgb(34, 211, 238)"
              strokeWidth="2"
              className="drop-shadow-sm"
            />
            
            {/* Data points */}
            {dataPoints.map((point, index) => {
              const width = 800;
              const height = 200;
              const padding = 40;
              const x = padding + (index * (width - 2 * padding) / (dataPoints.length - 1));
              const y = height - padding - ((point.value / maxValue) * (height - 2 * padding));
              
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="rgb(34, 211, 238)"
                  className="drop-shadow-sm"
                />
              );
            })}
            
            {/* Y-axis labels */}
            <text x="10" y="40" fill="#94a3b8" fontSize="12">80</text>
            <text x="10" y="60" fill="#94a3b8" fontSize="12">70</text>
            <text x="10" y="80" fill="#94a3b8" fontSize="12">60</text>
            <text x="10" y="100" fill="#94a3b8" fontSize="12">50</text>
            <text x="10" y="120" fill="#94a3b8" fontSize="12">40</text>
            <text x="10" y="140" fill="#94a3b8" fontSize="12">30</text>
            <text x="10" y="160" fill="#94a3b8" fontSize="12">20</text>
            <text x="10" y="180" fill="#94a3b8" fontSize="12">10</text>
            
            {/* X-axis labels */}
            <text x="80" y="195" fill="#94a3b8" fontSize="10">Jan</text>
            <text x="160" y="195" fill="#94a3b8" fontSize="10">Feb</text>
            <text x="240" y="195" fill="#94a3b8" fontSize="10">Mar</text>
            <text x="320" y="195" fill="#94a3b8" fontSize="10">Apr</text>
            <text x="400" y="195" fill="#94a3b8" fontSize="10">May</text>
            <text x="480" y="195" fill="#94a3b8" fontSize="10">Jun</text>
            <text x="560" y="195" fill="#94a3b8" fontSize="10">Jul</text>
            <text x="640" y="195" fill="#94a3b8" fontSize="10">Aug</text>
            <text x="720" y="195" fill="#94a3b8" fontSize="10">Sep</text>
          </svg>
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
