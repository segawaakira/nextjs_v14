import { Suspense, use } from "react";
import { UpdatePostForm } from "@/components/UpdatePostForm";
import { RemovePostButton } from "@/components/RemovePostButton";

const Form = async ({ id }: { id: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/posts/${id}`
  );
  const post = await res.json();
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
