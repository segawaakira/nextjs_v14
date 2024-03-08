import { Suspense, use } from "react";
import { UpdatePostForm } from "@/components/UpdatePostForm";
import { RemovePostButton } from "@/components/RemovePostButton";

function delay(n: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1000);
  });
}

const Form = async ({ id }: { id: string }) => {
  const res = await fetch(`http://localhost:4000/posts/${id}`);
  const post = await res.json();
  await delay(1);
  return (
    <>
      <UpdatePostForm post={post} />
      <RemovePostButton id={id} />
    </>
  );
};

export default async function Home({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<p>Loading...</p>}>
        <Form id={params.id} />
      </Suspense>
    </main>
  );
}
