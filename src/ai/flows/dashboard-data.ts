'use server';

/**
 * @fileOverview Generates dynamic, realistic dashboard data for a user.
 *
 * - generateDashboardData - A function that generates stats, progress, and achievements.
 * - DashboardDataOutput - The return type for the generateDashboardData function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DashboardDataOutputSchema = z.object({
  quizzesCompleted: z
    .number()
    .describe('The total number of quizzes the user has completed. (e.g., between 5 and 20)'),
  averageScore: z
    .number()
    .describe('The average score of the user across all quizzes. (e.g., between 70 and 95)'),
  lessonsViewed: z
    .number()
    .describe('The total number of lessons the user has viewed. (e.g., between 10 and 30)'),
  quizHistory: z
    .array(
      z.object({
        session: z.number().describe('The session number.'),
        score: z
          .number()
          .describe(
            'The score for this session, as a percentage. (e.g., between 50 and 100)'
          ),
      })
    )
    .length(5)
    .describe('An array of the last 5 quiz session scores.'),
  achievements: z
    .array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        achieved: z
          .boolean()
          .describe(
            'Whether the user has achieved this. Mark the first 2-3 as achieved.'
          ),
      })
    )
    .describe('A list of achievements.'),
});
export type DashboardDataOutput = z.infer<typeof DashboardDataOutputSchema>;

const achievementsList = [
  {
    id: 1,
    title: 'Quiz Novice',
    description: 'Complete your first quiz.',
  },
  {
    id: 2,
    title: 'Perfect Score',
    description: 'Get 100% on any quiz.',
  },
  {
    id: 3,
    title: 'Resource Explorer',
    description: 'View 5 items from the resource library.',
  },
  {
    id: 4,
    title: 'Aqua Expert',
    description: 'Complete all quizzes with an average score of 80% or higher.',
  },
  {
    id: 5,
    title: 'Community Starter',
    description: 'Start your first discussion in the community forum.',
  },
];

export async function generateDashboardData(): Promise<DashboardDataOutput> {
  return dashboardDataFlow();
}

const prompt = ai.definePrompt({
  name: 'dashboardDataPrompt',
  output: { schema: DashboardDataOutputSchema },
  prompt: `You are an AI that generates simulated user progress data for an educational app about water conservation called "AquaMind".

Generate a realistic and encouraging set of dashboard data for a user who is making good progress.

The available achievements are:
${JSON.stringify(achievementsList, null, 2)}

Please generate the full dashboard data object now.`,
});

const dashboardDataFlow = ai.defineFlow(
  {
    name: 'dashboardDataFlow',
    outputSchema: DashboardDataOutputSchema,
  },
  async () => {
    const { output } = await prompt();
    if (!output) {
      throw new Error('Could not generate dashboard data.');
    }
    // Ensure the achievement details from our constant list are used, not hallucinated ones.
    const validatedAchievements = output.achievements.map(ach => {
        const originalAchievement = achievementsList.find(a => a.id === ach.id);
        return {
            ...ach,
            title: originalAchievement?.title || ach.title,
            description: originalAchievement?.description || ach.description,
        }
    })
    return {...output, achievements: validatedAchievements};
  }
);
