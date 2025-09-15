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
  answer: z.string().describe('The user’s answer to the quiz question.'),
  correctAnswer: z.string().describe('The correct answer to the quiz question.'),
  educationalContent: z
    .string()
    .describe(
      'Educational content related to groundwater conservation. Use this to provide tips and data in the feedback.'
    ),
  playerKnowledgeLevel: z
    .string()
    .describe(
      'The players current knowledge level, can be beginner, intermediate, or advanced.'
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
  prompt: `You are an AI expert in environmental education, specializing in groundwater conservation. Your goal is to provide personalized, encouraging, and highly educational feedback for a quiz question.

The user has provided the following answer:
- Question: "{{{question}}}"
- Their Answer: "{{{answer}}}"
- Correct Answer: "{{{correctAnswer}}}"

Reference Educational Content:
"{{{educationalContent}}}"

Player's Knowledge Level: {{{playerKnowledgeLevel}}}

**Instructions for Generating Feedback:**

1.  **Determine Correctness**: Compare the user's answer to the correct answer.

2.  **Generate Feedback (If Incorrect):**
    *   Start with a gentle and encouraging tone. Acknowledge their effort (e.g., "That's a good thought...").
    *   Clearly state that the answer is incorrect without being discouraging.
    *   Provide the correct answer and a detailed, easy-to-understand explanation of why it is correct. Use the provided "Reference Educational Content" as the primary source for your explanation.
    *   Elaborate on the core concepts. Explain the 'why' behind the answer. For example, if the topic is groundwater sources, explain what groundwater is, where it comes from (recharge), and why it's a vital resource.
    *   Connect the concept to real-world impact and conservation. Provide actionable tips (e.g., "Simple actions like fixing leaky faucets...").
    *   End with a positive and motivational closing statement that encourages them to continue learning.

3.  **Generate Feedback (If Correct):**
    *   Start with enthusiastic praise (e.g., "Excellent!", "That's exactly right!").
    *   Confirm their answer is correct and briefly reiterate why.
    *   Use the opportunity to deepen their knowledge. Provide an interesting, supplementary fact or a more advanced concept from the "Reference Educational Content".
    *   Reinforce the importance of the topic and encourage them to apply their knowledge.
    *   End with a positive and forward-looking statement.

4.  **Final Output**: The entire feedback should be a single, cohesive, and well-written paragraph. Ensure the tone is supportive and educational throughout.

Generate the feedback now:`,
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
