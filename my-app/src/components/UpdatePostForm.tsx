"use client";

import { useState } from "react";

export const UpdatePostForm = ({ id, post }: { id: string; post: any }) => {
  const [title, setTitle] = useState(post?.title);
  const [author, setAuthor] = useState(post?.author);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newPost = { title, author };

    try {
      const response = await fetch(`http://localhost:4000/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const post = await response.json();
      setTitle(post.title);
      setAuthor(post.author);
      // 成功した場合の処理（例えば、投稿リストを更新するなど）
    } catch (error) {
      console.error("Error creating a post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Update Post</button>
    </form>
  );
};
