import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4">
      <nav className="max-w-5xl mx-auto flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}