import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ caption, href }) => {
  const router = useRouter();
  const activeClasses =
    router.asPath === href ? "border-b-4 border-green-500 " : "text-green-500";
  return (
    <Link href={href}>
      <a className={`py-4 px-2 font-semibold ${activeClasses}`}>{caption}</a>
    </Link>
  );
};

export default NavItem;
