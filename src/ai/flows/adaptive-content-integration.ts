'use server';

/**
 * @fileOverview A Genkit flow that dynamically incorporates relevant educational content and tips into the feedback.
 *
 * - incorporateEducationalContent - A function that incorporates educational content into feedback.
 * - IncorporateEducationalContentInput - The input type for the incorporateEducationalContent function.
 * - IncorporateEducationalContentOutput - The return type for the incorporateEducationalContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IncorporateEducationalContentInputSchema = z.object({
  feedback: z.string().describe('The original feedback to the player.'),
  playerKnowledgeLevel: z
    .string()
    .describe(
      'The players current knowledge level, can be beginner, intermediate, or advanced.'
    ),
  topic: z.string().describe('The topic for which to incorporate educational content.'),
});
export type IncorporateEducationalContentInput = z.infer<
  typeof IncorporateEducationalContentInputSchema
>;

const IncorporateEducationalContentOutputSchema = z.object({
  enhancedFeedback: z
    .string()
    .describe('The feedback with incorporated educational content.'),
});
export type IncorporateEducationalContentOutput = z.infer<
  typeof IncorporateEducationalContentOutputSchema
>;

export async function incorporateEducationalContent(
  input: IncorporateEducationalContentInput
): Promise<IncorporateEducationalContentOutput> {
  return incorporateEducationalContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'incorporateEducationalContentPrompt',
  input: {schema: IncorporateEducationalContentInputSchema},
  output: {schema: IncorporateEducationalContentOutputSchema},
  prompt: `You are an educational game designer. You are designing adaptive feedback for a player. The player will receive the feedback below. You should incorporate additional educational content related to the topic that is appropriate for the players knowledge level into the feedback.

Original Feedback: {{{feedback}}}
Player Knowledge Level: {{{playerKnowledgeLevel}}}
Topic: {{{topic}}}

Enhanced Feedback:`,
});

const incorporateEducationalContentFlow = ai.defineFlow(
  {
    name: 'incorporateEducationalContentFlow',
    inputSchema: IncorporateEducationalContentInputSchema,
    outputSchema: IncorporateEducationalContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {enhancedFeedback: output!};
  }
);
