"use server";

import { generatePersonalizedFeedback } from "@/ai/flows/personalized-quiz-feedback";
import { incorporateEducationalContent } from "@/ai/flows/adaptive-content-integration";

export async function getEnhancedFeedback(
  question: string,
  answer: string,
  correctAnswer: string,
  educationalContent: string
) {
  try {
    // Step 1: Get initial personalized feedback
    const personalizedResult = await generatePersonalizedFeedback({
      question,
      answer,
      correctAnswer,
      educationalContent,
    });

    if (!personalizedResult || !personalizedResult.feedback) {
      throw new Error("Failed to generate personalized feedback.");
    }

    // Step 2: Enhance the feedback with more educational content
    const enhancedResult = await incorporateEducationalContent({
      feedback: personalizedResult.feedback,
      playerKnowledgeLevel: "beginner",
      topic: "Groundwater Conservation",
    });

    if (!enhancedResult || !enhancedResult.enhancedFeedback) {
        throw new Error("Failed to enhance feedback with educational content.");
    }

    return {
      success: true,
      feedback: enhancedResult.enhancedFeedback,
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
