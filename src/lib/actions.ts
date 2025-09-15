'use server';

import { generatePersonalizedFeedback } from "@/ai/flows/personalized-quiz-feedback";

export async function getEnhancedFeedback(
  question: string,
  answer: string,
  correctAnswer: string,
  educationalContent: string
) {
  try {
    const result = await generatePersonalizedFeedback({
      question,
      answer,
      correctAnswer,
      educationalContent,
      playerKnowledgeLevel: "beginner", // Assuming beginner for now
    });

    if (!result || !result.feedback) {
      throw new Error("Failed to generate personalized feedback.");
    }

    return {
      success: true,
      feedback: result.feedback,
    };
  } catch (error) {
    let message = "Sorry, an error occurred while generating your feedback. Please try again.";
    if (error instanceof Error) {
      message = `An error occurred: ${error.message}. Please try again.`;
    }
    console.error("Error getting enhanced feedback:", error);
    return {
      success: false,
      feedback: message
    };
  }
}
