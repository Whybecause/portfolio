import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen flex-col">
      <h1>404 - Page not found</h1>
      <Link href="/" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Return Home</Link>
    </div>
  );
}
