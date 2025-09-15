import { Achievements } from "@/components/dashboard/achievements";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { StatsCards } from "@/components/dashboard/stats-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateDashboardData } from "@/ai/flows/dashboard-data";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

async function DashboardData() {
  const data = await generateDashboardData();

  if (!data) {
    return (
      <div className="flex flex-col gap-8">
        <StatsCards.Skeleton />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
              <CardDescription>
                Your quiz scores over the last 5 sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-64 w-full" />
            </CardContent>
          </Card>
          <div className="lg:col-span-1">
            <Achievements.Skeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <StatsCards
        quizzesCompleted={data.quizzesCompleted}
        averageScore={data.averageScore}
        lessonsViewed={data.lessonsViewed}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>
              Your quiz scores over the last 5 sessions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProgressChart history={data.quizHistory} />
          </CardContent>
        </Card>
        <div className="lg:col-span-1">
          <Achievements achievements={data.achievements} />
        </div>
      </div>
    </div>
  );
}


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Welcome to AquaMind!
        </h1>
        <p className="text-muted-foreground">
          Track your progress and continue your mission to save groundwater.
        </p>
      </header>
      <Suspense fallback={<DashboardData.Skeleton />}>
        <DashboardData />
      </Suspense>
    </div>
  );
}

DashboardData.Skeleton = function DashboardDataSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <StatsCards.Skeleton />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>
              Your quiz scores over the last 5 sessions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
        <div className="lg:col-span-1">
          <Achievements.Skeleton />
        </div>
      </div>
    </div>
  );
}
