'use server';

/**
 * @fileOverview Generates personalized feedback for quiz answers related to groundwater conservation.
 *
 * - generatePersonalizedFeedback - A function that generates feedback based on quiz answers.
 * - PersonalizedFeedbackInput - The input type for the generatePersonalizedFeedback function.
 * - PersonalizedFeedbackOutput - The return type for the generatePersonalizedFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFeedbackInputSchema = z.object({
  question: z.string().describe('The quiz question.'),
  answer: z.string().describe('The user\u2019s answer to the quiz question.'),
  correctAnswer: z.string().describe('The correct answer to the quiz question.'),
  educationalContent: z
    .string()
    .describe(
      'Educational content related to groundwater conservation. Use this to provide tips and data in the feedback.'
    ),
});
export type PersonalizedFeedbackInput = z.infer<
  typeof PersonalizedFeedbackInputSchema
>;

const PersonalizedFeedbackOutputSchema = z.object({
  feedback: z
    .string()
    .describe(
      'Personalized feedback on the quiz answer, including explanations, additional learning resources, and relevant educational content.'
    ),
});
export type PersonalizedFeedbackOutput = z.infer<
  typeof PersonalizedFeedbackOutputSchema
>;

export async function generatePersonalizedFeedback(
  input: PersonalizedFeedbackInput
): Promise<PersonalizedFeedbackOutput> {
  return personalizedQuizFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedQuizFeedbackPrompt',
  input: {schema: PersonalizedFeedbackInputSchema},
  output: {schema: PersonalizedFeedbackOutputSchema},
  prompt: `You are an AI assistant providing personalized feedback for a quiz on groundwater conservation.

Your goal is to explain why the user's answer is correct or incorrect and provide encouragement. Use the provided educational content to add a relevant fact or tip.

Question: {{{question}}}
User's Answer: {{{answer}}}
Correct Answer: {{{correctAnswer}}}
Reference Educational Content: {{{educationalContent}}}

Generate feedback based on whether the user's answer is correct or incorrect.
- If correct, praise the user and briefly explain why their answer is right.
- If incorrect, gently correct them, explain the right answer, and offer encouragement.
- In both cases, include a short, relevant piece of information from the reference content.

Feedback:
  `,
});

const personalizedQuizFeedbackFlow = ai.defineFlow(
  {
    name: 'personalizedQuizFeedbackFlow',
    inputSchema: PersonalizedFeedbackInputSchema,
    outputSchema: PersonalizedFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Could not generate personalized feedback.');
    }
    return output;
  }
);
