"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { NewPost } from "@/interfaces/post";
import { createPost } from "@/app/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(NewPost),
    defaultValues: {
      title: "",
      author: "",
    },
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newPost = { title, author };

  //   try {
  //     const response = await fetch("http://localhost:4000/posts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newPost),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }
  //     const post = await response.json();
  //     // 成功した場合の処理（例えば、投稿リストを更新するなど）
  //   } catch (error) {
  //     console.error("Error creating a post:", error);
  //   }
  // };

  return (
    <form action={createPost}>
      <input type="text" {...register("title")} placeholder="Title" />
      {errors.title && <p>{errors.title.message}</p>}

      <input type="text" {...register("author")} placeholder="Author" />
      {errors.author && <p>{errors.author.message}</p>}
      <button type="submit">Create Post</button>
    </form>
  );
};
