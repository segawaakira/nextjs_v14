import { z } from "zod";

export const Post = z.object({
  id: z.number(),
  title: z.string().min(1, "Title is required"),
  author: z.string().nullish(),
});

export type Post = z.infer<typeof Post>;
