import { userProgress } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCheck, Target, TrendingUp } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      title: "Quizzes Completed",
      value: userProgress.quizzesCompleted,
      icon: BookCheck,
      color: "text-blue-500",
    },
    {
      title: "Average Score",
      value: `${userProgress.averageScore}%`,
      icon: Target,
      color: "text-green-500",
    },
    {
      title: "Lessons Viewed",
      value: userProgress.lessonsViewed,
      icon: TrendingUp,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 text-muted-foreground ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
