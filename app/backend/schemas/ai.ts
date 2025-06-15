import { z } from "zod";

export const factCheckSchema = z.object({
  title: z.string(),
  score: z.number().min(0).max(100)
    .describe(`From 0 to 100 score the input text based
     on fact checks. `),
  verdict: z.boolean().describe(`The verdicts whether the input text 
    is true or false based on the facts check.`),
  factsCheckSource: z.array(
    z.object({
      name: z.string().describe(
        `The name of organization or individual that
          provides facts check.`,
      ),
      url: z.string().describe(`The URL of the sources content that 
        back the facts check.`),
    }),
  ),
});

export const writingAssistantSchema = z.object({
  title: z.string(),
  score: z.number().min(0).max(100)
    .describe(`From 0 to 100 score the input text based
     on writing quality. `),
  verdict: z.boolean().describe(`The verdicts whether the input text 
    is true or false based on the writing quality.`),
  suggestions: z.array(
    z.object({
      about: z
        .string()
        .describe(`The sentences from text input which needs suggestions.`),
      value: z.string().describe(`The actual suggestion about the text.`),
    }),
  ),
});
