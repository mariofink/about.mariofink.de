import DocumentHead from "../components/DocumentHead";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import SubHeading from "../components/Subheading";

export default function Home() {
  return (
    <div className="container mx-auto">
      <DocumentHead title="Mario Fink • About Me" favicon="👋🏻" />

      <Navigation />

      <main className="py-8 container mx-auto px-6 max-w-prose">
        <Heading>About Me</Heading>
        <p className="mt-3 text-xl">
          Hi, my name is Mario Fink 👋🏻
          <br /> I live in the beautiful Rhön (a rural area in the midst of
          Germany) together with my wife and my two sons. Currently I work as a
          lead frontend developer at Goodyear Dunlop Tires in Fulda.
        </p>
        <SubHeading>Education</SubHeading>
        <p className="mt-3 text-xl">
          I finished my technical diploma in Economics & Management in 1999.
          After spending a year in community service (aka. Zivildienst) I
          started an apprenticeship as IT specialist at Goodyear Dunlop Tires
          that I finished successfully in 2003. I then accepted a job offering
          at the same company to work on their B2B shop as a web developer.
        </p>

        <SubHeading>Work Experience</SubHeading>
        <p className="mt-3 text-xl">
          Since 2003 I have been working in a 10-person team as lead frontend
          developer and UX designer – creating a B2B shop that is used
          throughout Europe, Middle East and South Africa (EMEA). My main
          responsibilities are the design and the implementation of the user
          interface. While doing that I am communicating with our European
          business stakeholders as well as our near and off-shore development
          partners.
        </p>
      </main>

      <Footer />
    </div>
  );
}
