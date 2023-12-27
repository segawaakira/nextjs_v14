import { UpdatePostForm } from "../../components/UpdatePostForm";

async function getData(id: string) {
  const res = await fetch(`http://localhost:4000/posts/${id}`);
  const posts = await res.json();
  return posts;
}

const Post = ({ post }: { post: any }) => {
  console.log(post);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
          href={`/posts/${post.id}`}
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          key={post.id}
        >
          <h3 className="text-2xl font-bold">{post.title} &rarr;</h3>
          <p className="mt-4 text-xl">{post.author}</p>
        </a>
      </div>
    </div>
  );
};

export default async function Home({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UpdatePostForm id={params.id} post={data} />
      <Post post={data} />
    </main>
  );
}
