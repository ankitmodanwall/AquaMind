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

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Welcome to AquaSaver!
        </h1>
        <p className="text-muted-foreground">
          Track your progress and continue your mission to save groundwater.
        </p>
      </header>

      <StatsCards />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>
              Your quiz scores over the last 7 sessions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProgressChart />
          </CardContent>
        </Card>
        <div className="lg:col-span-1">
          <Achievements />
        </div>
      </div>
    </div>
  );
}
