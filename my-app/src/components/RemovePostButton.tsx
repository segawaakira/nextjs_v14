"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const RemovePostButton = ({ id }: { id: string }) => {
  const removeData = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const post = await response.json();
      console.log("削除しました");
      // 成功した場合の処理（例えば、投稿リストを更新するなど）
    } catch (error) {
      console.error("Error creating a post:", error);
    }
  };

  return <Button onClick={() => removeData(id)}>Button</Button>;
};
