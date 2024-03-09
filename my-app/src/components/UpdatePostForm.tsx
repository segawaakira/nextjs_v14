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
    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("title", data.title);
    formData.append("author", data.author);
    try {
      await updatePost(formData);
    } catch (error) {
      console.error("Error updating the post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <form action={updatePost}> */}
      <input type="hidden" {...register("id")} />
      <input type="text" {...register("title")} placeholder="Title" />
      {errors.title && <p>{errors.title.message}</p>}

      <input type="text" {...register("author")} placeholder="Author" />
      {errors.author && <p>{errors.author.message}</p>}
      <button type="submit">Update Post</button>
    </form>
  );
};
