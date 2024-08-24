import { Suspense, use } from "react";
import { CreatePostForm } from "@/components/CreatePostForm";
import { Post } from "@/interfaces/post";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  searchParams: {
    title?: string[];
  };
};

const Posts = async ({ searchParams }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/posts`);
  const posts = await res.json();
  console.log(searchParams);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <br />
      <br />
      <br />
      <h1 className="text-5xl font-bold">Posts</h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {posts.map((post: Post) => (
          <a
            href={`/${post.id}`}
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            key={post.id}
          >
            <h3 className="text-2xl font-bold">{post.title} &rarr;</h3>
            <p className="mt-4 text-xl">{post.author}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default async function Home({ searchParams }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreatePostForm />
      <Suspense fallback={<p>Loading...</p>}>
        <Posts searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
