import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="flex justify-center sm:gap-6 sm:px-6 mt-3">
      <NavItem caption="About Me" href="/" />
      <NavItem caption="CV/Resume" href="/cv" />
      <NavItem caption="Tools & Tech" href="/tech" />
    </nav>
  );
}
