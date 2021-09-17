import DocumentHead from "../components/DocumentHead";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SubHeading from "../components/Subheading";
import Heading from "../components/Heading";

export default function Tech() {
  return (
    <div className="container mx-auto">
      <DocumentHead title="Mario Fink • Tools & Technologies" favicon="👨‍💻" />

      <Navigation />

      <main className="py-8 container mx-auto px-6 max-w-prose">
        <Heading>Tools & Technologies</Heading>
        <p className="mt-6">
          The frontend development world is still a fast-changing environment.
          Today’s hot stuff is tomorrow’s legacy technology.
        </p>
        <SubHeading>Working with right now</SubHeading>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Redux & Redux Toolkit</li>
          <li>Webpack</li>
          <li>Adobe Experience Manager</li>
        </ul>
        <SubHeading>Worked with in the past</SubHeading>
        <ul className="list-disc list-inside">
          <li>VueJS</li>
          <li>Ionic</li>
          <li>jQuery</li>
          <li>Grunt</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
