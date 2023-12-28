import { z } from "zod";

export const Post = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string().nullish(),
});

export type Post = z.infer<typeof Post>;
