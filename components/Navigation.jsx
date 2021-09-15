import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="container mx-auto px-6 mt-6 max-w-prose">
      <ul>
        <li>
          <Link href="/">
            <a>About Me</a>
          </Link>
        </li>
        <li>
          <Link href="/cv">
            <a>CV/Resume</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
