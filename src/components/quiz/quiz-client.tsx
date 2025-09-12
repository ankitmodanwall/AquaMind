"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { getEnhancedFeedback } from "@/lib/actions";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import type { QuizQuestion } from "@/lib/data";

type QuizClientProps = {
  questions: QuizQuestion[];
};

export function QuizClient({ questions }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean;
    text: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSubmit = async () => {
    if (!selectedAnswer) return;

    setIsSubmitting(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const result = await getEnhancedFeedback(
      currentQuestion.question,
      selectedAnswer,
      currentQuestion.correctAnswer,
      currentQuestion.educationalContent
    );
    
    setFeedback({ isCorrect, text: result.feedback });
    setIsSubmitting(false);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setFeedback(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setFeedback(null);
  };

  if (isFinished) {
    return (
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            {score / questions.length > 0.7
              ? "Great job! You're an AquaSaver expert!"
              : "Good effort! Keep learning to improve your score."}
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={handleRestart}>Take Quiz Again</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <>
      <Progress value={progress} className="w-full" />
      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
          <CardDescription className="text-lg leading-relaxed pt-2">
            {currentQuestion.question}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedAnswer || ""}
            onValueChange={setSelectedAnswer}
            disabled={!!feedback}
          >
            {currentQuestion.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="text-base cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer || !!feedback || isSubmitting}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Feedback...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={!!feedback} onOpenChange={() => feedback && handleNext()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              {feedback?.isCorrect ? (
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              ) : (
                <AlertCircle className="h-8 w-8 text-destructive" />
              )}
              {feedback?.isCorrect ? "Correct!" : "Not Quite"}
            </DialogTitle>
            <DialogDescription className="text-foreground/90 text-base pt-4 max-h-[50vh] overflow-y-auto">
              {feedback?.text}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end pt-4">
             <Button onClick={handleNext}>Next Question</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
