
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
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-primary/20 p-8 rounded-3xl overflow-hidden shadow-xl">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-xl font-semibold">Active Reviews Over Time - Your Business</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary text-sm font-medium">Active Reviews</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <svg viewBox="0 0 800 200" className="w-full h-48">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="80" height="20" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0.6)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Chart line */}
            <path
              d={createPath()}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              className="drop-shadow-md"
            />
            
            {/* Data points */}
            {dataPoints.map((point, index) => {
              const width = 800;
              const height = 200;
              const padding = 40;
              const x = padding + (index * (width - 2 * padding) / (dataPoints.length - 1));
              const y = height - padding - ((point.value / maxValue) * (height - 2 * padding));
              
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill="hsl(var(--primary))"
                    className="drop-shadow-sm"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="3"
                    fill="white"
                  />
                </g>
              );
            })}
            
            {/* Y-axis labels */}
            <text x="10" y="40" fill="hsl(var(--muted-foreground))" fontSize="12">80</text>
            <text x="10" y="60" fill="hsl(var(--muted-foreground))" fontSize="12">70</text>
            <text x="10" y="80" fill="hsl(var(--muted-foreground))" fontSize="12">60</text>
            <text x="10" y="100" fill="hsl(var(--muted-foreground))" fontSize="12">50</text>
            <text x="10" y="120" fill="hsl(var(--muted-foreground))" fontSize="12">40</text>
            <text x="10" y="140" fill="hsl(var(--muted-foreground))" fontSize="12">30</text>
            <text x="10" y="160" fill="hsl(var(--muted-foreground))" fontSize="12">20</text>
            <text x="10" y="180" fill="hsl(var(--muted-foreground))" fontSize="12">10</text>
            
            {/* X-axis labels */}
            <text x="80" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Jan</text>
            <text x="160" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Feb</text>
            <text x="240" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Mar</text>
            <text x="320" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Apr</text>
            <text x="400" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">May</text>
            <text x="480" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Jun</text>
            <text x="560" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Jul</text>
            <text x="640" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Aug</text>
            <text x="720" y="195" fill="hsl(var(--muted-foreground))" fontSize="10">Sep</text>
          </svg>
        </div>
        
        {/* Bottom stats */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-primary/20">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-white font-medium">Growth Rate: +58%</span>
          </div>
          <div className="text-muted-foreground text-sm">
            Real-time analytics dashboard
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
