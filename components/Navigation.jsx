import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <nav className="container mx-auto px-6 mt-6 max-w-prose">
      <NavItem caption="About Me" href="/" />
      <NavItem caption="CV/Resume" href="/cv" />
    </nav>
  );
}
