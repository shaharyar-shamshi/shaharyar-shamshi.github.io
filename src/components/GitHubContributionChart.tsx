import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Generate mock contribution data for the last year
const generateContributionData = () => {
  const data = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364); // Last 52 weeks

  for (let i = 0; i < 365; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const count = Math.floor(Math.random() * 15); // Random contributions 0-15
    data.push({
      date: date.toISOString().split('T')[0],
      count,
    });
  }
  return data;
};

const getContributionLevel = (count: number) => {
  if (count === 0) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 9) return 3;
  return 4;
};

export const GitHubContributionChart = () => {
  const [contributions] = useState(generateContributionData());
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Group contributions by week
  const weeks: Array<Array<{ date: string; count: number }>> = [];
  let currentWeek: Array<{ date: string; count: number }> = [];
  
  contributions.forEach((day, index) => {
    const date = new Date(day.date);
    const dayOfWeek = date.getDay();
    
    if (index === 0 && dayOfWeek !== 0) {
      // Fill empty days at the start
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push({ date: '', count: -1 });
      }
    }
    
    currentWeek.push(day);
    
    if (dayOfWeek === 6 || index === contributions.length - 1) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
  });

  const getColor = (level: number) => {
    if (!mounted) return 'bg-muted';
    
    if (level === -1) return 'bg-transparent';
    if (theme === 'dark') {
      const colors = [
        'bg-muted/50',
        'bg-primary/30',
        'bg-primary/50',
        'bg-primary/70',
        'bg-primary',
      ];
      return colors[level];
    } else {
      const colors = [
        'bg-muted',
        'bg-primary/20',
        'bg-primary/40',
        'bg-primary/60',
        'bg-primary/80',
      ];
      return colors[level];
    }
  };

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="inline-block min-w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground font-light">
            {totalContributions} contributions in the last year
          </span>
        </div>
        
        <div className="flex gap-[3px]">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => {
                const level = day.count === -1 ? -1 : getContributionLevel(day.count);
                return (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-[11px] h-[11px] rounded-sm transition-all duration-200 hover:ring-2 hover:ring-primary/50 ${getColor(level)}`}
                    title={day.date ? `${day.count} contributions on ${day.date}` : ''}
                  />
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          <span className="font-light">Less</span>
          <div className="flex gap-[3px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[11px] h-[11px] rounded-sm ${getColor(level)}`}
              />
            ))}
          </div>
          <span className="font-light">More</span>
        </div>
      </div>
    </div>
  );
};
