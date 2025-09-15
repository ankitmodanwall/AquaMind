'use server';

/**
 * @fileOverview Generates dynamic, realistic community forum threads.
 *
 * - generateCommunityThreads - A function that generates a list of community threads.
 * - CommunityThreadsOutput - The return type for the generateCommunityThreads function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CommunityThreadsOutputSchema = z.object({
  threads: z
    .array(
      z.object({
        id: z.number(),
        title: z.string().describe('A realistic and engaging topic title for a community forum about water conservation.'),
        author: z.string().describe('A realistic user name for the author of the thread.'),
        replies: z.number().describe('The number of replies to the thread (e.g., between 0 and 50).'),
        lastPost: z.string().describe('A relative time for the last post (e.g., "2 hours ago", "1 day ago").'),
      })
    )
    .length(4)
    .describe('An array of 4 community forum threads.'),
});
export type CommunityThreadsOutput = z.infer<typeof CommunityThreadsOutputSchema>;


export async function generateCommunityThreads(): Promise<CommunityThreadsOutput> {
  return communityThreadsFlow();
}

const prompt = ai.definePrompt({
  name: 'communityThreadsPrompt',
  output: { schema: CommunityThreadsOutputSchema },
  prompt: `You are an AI that generates simulated community data for an educational app about water conservation called "AquaMind".

Generate a realistic and diverse set of community forum threads. The topics should be relevant to water conservation, groundwater, and environmental action.`,
});

const communityThreadsFlow = ai.defineFlow(
  {
    name: 'communityThreadsFlow',
    outputSchema: CommunityThreadsOutputSchema,
  },
  async () => {
    const { output } = await prompt();
    if (!output) {
      throw new Error('Could not generate community threads.');
    }
    return output;
  }
);
