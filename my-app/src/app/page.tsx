import Image from "next/image";

async function getData() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const json = await res.json();
  // return json.userId;
  const res = await fetch("http://localhost:4000/posts");
  const json = await res.json();

  console.log(json);
  return json[0].id;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
    </main>
  );
}
