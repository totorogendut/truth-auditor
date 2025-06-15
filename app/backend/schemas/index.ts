import { z } from "zod";
import { factCheckSchema, writingAssistantSchema } from "./ai";

export const resultSchema = z.object({
  factsCheck: factCheckSchema.optional(),
  writingAssistant: writingAssistantSchema.optional(),
});

export type AIResult = z.infer<typeof resultSchema>;

export const requestSchema = z.object({
  text: z.string(),
  useFactsCheck: z.boolean(),
  useWritingAssistant: z.boolean(),
});

export type AIRequest = z.infer<typeof requestSchema>;
