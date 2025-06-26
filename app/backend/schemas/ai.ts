import { z } from "zod";

export const factCheckSchema = z.object({
  score: z.number().min(0).max(100)
    .describe(`From 0 to 100 score the input text based
     on fact checks. `),
  verdict: z.boolean().describe(`The verdicts whether the input text 
    is true or false based on the facts check.`),
  conclusion: z.string().describe(`Gives a conclusion on how you facts check
    the input text.`),
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
  score: z.number().min(0).max(100)
    .describe(`From 0 to 100 score the input text based
     on writing quality. `),
  verdict: z.boolean().describe(`The verdicts whether the input text 
    is true or false based on the writing quality.`),
  conclusion: z.string().describe(`Gives a conclusion on how you well
    the input text and which area can be improved.`),
  suggestions: z.array(
    z.object({
      about: z
        .string()
        .describe(`The sentences from text input which needs suggestions.`),
      value: z.string().describe(`The actual suggestion about the text.`),
    }),
  ).describe(`Make suggestions about the writing quality, proofreading, editing,
    copy writing, etc.`),
});

export const seoSuggestionsSchema = z.object({
  score: z.number().min(0).max(100)
    .describe(`From 0 to 100 score the input text based
     on how optimize the writing for SEO. `),
  verdict: z.boolean().describe(`The verdicts whether the input text 
    is true or false based on whether the writing is already SEO optmized.`),
  conclusion: z.string().describe(`Gives a conclusion on how optimized
    the input text for SEO and which area can be improved.`),
  suggestions: z
    .array(
      z.object({
        about: z.string()
          .describe(`The sentences from text input which needs to be
          rewritten on for SEO optimization.`),
        value: z.string().describe(`The actual suggestion about the text.`),
      }),
    )
    .describe(`Make suggestions about SEO optimization for the input text.`),
});

export const similarContentSchema = z.object({
  score: z.number().min(0).max(100)
    .describe(`From 0 to 100 score the input text based
     the quality comparison with similar contents in the
     internet. `),
  similarContents: z
    .array(
      z.object({
        title: z.string().describe(`Title of the crawled similar contents.`),
        summary: z
          .string()
          .describe(
            `Summary of the crawled similar contents. Between 120 to 500 characters.`,
          ),
        from: z
          .string()
          .describe(`The name of the website the similar content found`),
        url: z.string().describe(`URL of the crawled similar contents.`),
      }),
    )
    .describe(
      `Crawl the internet to find similar contents with the input text.`,
    ),
});
