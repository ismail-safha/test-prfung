import Link from "next/link";

export default function Home() {
  return (
    <main className="container w-full px-2">
      <h1 className="text-center m-auto bg-purple-600 p-5 ">
        <Link href="/lesen">lesen</Link>
      </h1>
    </main>
  );
}
