import { UpdatePostForm } from "@/components/UpdatePostForm";
import { RemovePostButton } from "@/components/RemovePostButton";

async function getData(id: string) {
  const res = await fetch(`http://localhost:4000/posts/${id}`);
  const posts = await res.json();
  return posts;
}

export default async function Home({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UpdatePostForm post={data} />
      <RemovePostButton id={params.id} />
    </main>
  );
}
