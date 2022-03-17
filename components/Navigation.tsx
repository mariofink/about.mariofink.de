import NavItem from "./NavItem";

const Navigation = () => (
  <nav className="flex justify-center sm:gap-6 sm:px-6 mt-3">
    <NavItem caption="About Me" href="/" />
    <NavItem caption="CV/Résumé" href="/cv/" />
    <NavItem caption="Tools &amp; Tech" href="/tech/" />
  </nav>
);

export default Navigation;
