import { QuizClient } from "@/components/quiz/quiz-client";
import { quizQuestions } from "@/lib/data";

export default function QuizPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Groundwater Quiz
        </h1>
        <p className="text-muted-foreground">
          Test your knowledge and learn more about water conservation.
        </p>
      </header>
      <QuizClient questions={quizQuestions} />
    </div>
  );
}
