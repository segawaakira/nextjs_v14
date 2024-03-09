"use server";
import { NewPost, Post } from "@/interfaces/post";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  const { title, author } = NewPost.parse({
    title: formData.get("title"),
    author: formData.get("author"),
  });
  const data = {
    title,
    author,
  };
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.error("Error creating a post:", error);
  }
}

export async function updatePost(formData: FormData) {
  const { id, title, author } = Post.parse({
    id: Number(formData.get("id")),
    title: formData.get("title"),
    author: formData.get("author"),
  });
  const data = {
    id,
    title,
    author,
  };
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
    revalidatePath("/[id]");
  } catch (error) {
    console.error("Error creating a post:", error);
  }
}
