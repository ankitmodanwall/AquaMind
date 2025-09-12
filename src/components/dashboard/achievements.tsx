import { achievements } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Lock } from "lucide-react";

export function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
        <CardDescription>Challenges you've completed.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {achievements.map((achievement) => (
            <li
              key={achievement.id}
              className="flex items-start gap-4"
              aria-label={`${achievement.title}: ${
                achievement.achieved ? "Completed" : "Locked"
              }`}
            >
              <div
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                  achievement.achieved
                    ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {achievement.achieved ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Lock className="h-5 w-5" />
                )}
              </div>
              <div>
                <h3
                  className={`font-semibold ${
                    achievement.achieved ? "" : "text-muted-foreground"
                  }`}
                >
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
