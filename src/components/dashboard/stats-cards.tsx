import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookCheck, Target, TrendingUp } from "lucide-react";

type StatsCardsProps = {
  quizzesCompleted: number;
  averageScore: number;
  lessonsViewed: number;
};

export function StatsCards({ quizzesCompleted, averageScore, lessonsViewed }: StatsCardsProps) {
  const stats = [
    {
      title: "Quizzes Completed",
      value: quizzesCompleted,
      icon: BookCheck,
      color: "text-chart-1",
    },
    {
      title: "Average Score",
      value: `${averageScore}%`,
      icon: Target,
      color: "text-chart-2",
    },
    {
      title: "Lessons Viewed",
      value: lessonsViewed,
      icon: TrendingUp,
      color: "text-chart-3",
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

StatsCards.Skeleton = function StatsCardsSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
                <Card key={i}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-4" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-8 w-1/3" />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
