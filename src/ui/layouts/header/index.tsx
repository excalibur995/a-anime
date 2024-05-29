import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-0 border-b dark:border-b-zinc-700 h-16 z-30 dark:bg-[#212529] bg-[#f8f8f8]">
      <nav className="mx-auto max-w-5xl h-full my-auto gap-4 flex items-center justify-between transition-all p-4">
        <Link href="/">
          <Image src="/vercel.svg" alt="logo" width={96} height={24} fetchPriority="high" />
        </Link>
      </nav>
    </header>
  );
}
