import { generateObject } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { z } from "zod";
import { factCheckSchema, writingAssistantSchema } from "./schemas/ai";
import { requestSchema, resultSchema, type AIRequest } from "./schemas";

const google = createGoogleGenerativeAI({
  apiKey: Bun.env.GEMINI_API_KEY,
});

Bun.serve({
  routes: {
    "/": AIGenereate,
  },
});

async function AIGenereate(req: Request) {
  const json = (await req.json()) as AIRequest;
  if (!requestSchema.safeParse(json))
    return new Response("Bad request", { status: 400 });

  const { text, useFactsCheck, useWritingAssistant } = json;
  const schemaObj = {};
  if (useFactsCheck)
    Object.assign(schemaObj, {
      factsCheck: factCheckSchema,
    });
  if (useWritingAssistant)
    Object.assign(schemaObj, {
      factsCheck: writingAssistantSchema,
    });

  const { object } = await generateObject({
    model: google("gemini-2.5-flash-preview-04-17"),
    schema: z.object(schemaObj),
    prompt: `Generate JSON result based on the text.
    
  TEXT: ${text}`,
  });

  return new Response("");
}
