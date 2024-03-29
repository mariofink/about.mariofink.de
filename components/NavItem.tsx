import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  caption: string;
  href: string;
}

const NavItem = ({ caption, href }: props) => {
  const router = useRouter();
  const activeClasses =
    router.asPath === href
      ? "border-b-4 "
      : "hover:border-b-4 text-emerald-500";
  return (
    <Link
      href={href}
      className={`transition-all duration-100 ease-in-out py-4 px-2 font-semibold border-emerald-500 hover:scale-110 ${activeClasses}`}
    >
      {caption}
    </Link>
  );
};

export default NavItem;
