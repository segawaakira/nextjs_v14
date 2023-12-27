import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();
  return posts;
}

const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl font-bold">Posts</h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {posts.map((post: any) => (
          <a
            href={`/posts/${post.id}`}
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

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Posts posts={data} />
    </main>
  );
}
