"use client";

import { useForm } from "react-hook-form";
import { Post } from "@/interfaces/post";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePost } from "@/app/lib/actions";

export const UpdatePostForm = ({ post }: { post: Post }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(Post),
    defaultValues: {
      id: post?.id,
      title: post?.title,
      author: post?.author,
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/posts/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const updatedPost = await response.json();
      reset(updatedPost); // Reset form with new data
      // Additional success handling
    } catch (error) {
      console.error("Error updating the post:", error);
    }
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <form action={updatePost}>
      <input type="hidden" {...register("id")} />
      <input type="text" {...register("title")} placeholder="Title" />
      {errors.title && <p>{errors.title.message}</p>}

      <input type="text" {...register("author")} placeholder="Author" />
      {errors.author && <p>{errors.author.message}</p>}
      <button type="submit">Update Post</button>
    </form>
  );
};
