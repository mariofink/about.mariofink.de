import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const SubHeading = ({ children }) => (
  <h2 className="mt-6 mb-3 text-3xl font-bold">{children}</h2>
);

const TabularEntry = ({ term, children }) => (
  <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-3">
    <dt class="text-sm font-medium text-gray-500">{term}</dt>
    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{children}</dd>
  </div>
);

export default function CV() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Mario Fink • About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="py-16 container mx-auto px-6 max-w-prose">
        <h1 className="text-6xl font-bold">CV/Resume</h1>

        <SubHeading>Work Experience</SubHeading>
        <dl>
          <TabularEntry term="2003-today">
            <p className="pb-3">
              Goodyear Dunlop Tires Germany GmbH, Fulda
              <br /> Web developer, UX Designer
            </p>
            <h3 className="font-bold">Selected projects</h3>
            <ul className="list-disc list-outside">
              <li>Retro-fitted responsive design for EMEA B2B platform</li>
              <li>Createad tool to localise EMEA’s B2B platform</li>
              <li>
                Designed and developed Ionic-based mobile app for market
                research purposes
              </li>
            </ul>
          </TabularEntry>
        </dl>

        <SubHeading>Education</SubHeading>
        <dl>
          <TabularEntry term="1997-1999">
            Richard Müller Schule, Fulda <br />
            Fachabitur »Wirtschaft & Verwaltung«
          </TabularEntry>
          <TabularEntry term="1999-2000">
            DJO Landesheim, Rodholz <br />
            Community service
          </TabularEntry>
          <TabularEntry term="2000-2003">
            Goodyear Dunlop Tires Germany GmbH, Fulda <br />
            Apprenticeship IT specialist
          </TabularEntry>
        </dl>

        <SubHeading>Miscellaneous</SubHeading>
        <dl>
          <TabularEntry term="Languages">
            German (native), English (fluent), French (basics)
          </TabularEntry>
        </dl>
      </main>

      <Footer />
    </div>
  );
}
