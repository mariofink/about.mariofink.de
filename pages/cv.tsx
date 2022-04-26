import DocumentHead from "../components/DocumentHead";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SubHeading from "../components/Subheading";
import TabularEntry from "../components/TabularEntry";
import Heading from "../components/Heading";
import Page from "../components/Page";

const CV = () => (
  <Page>
    <DocumentHead title="Mario Fink • CV/Résumé" favicon="📝" />

    <Navigation />

    <main className="py-8 container mx-auto px-6 max-w-prose">
      <Heading>CV/Résumé</Heading>

      <SubHeading>Work Experience</SubHeading>
      <dl>
        <TabularEntry term="2003-today">
          <p className="pb-3">
            <strong>Goodyear Germany GmbH, Fulda</strong>
            <br /> Web developer
          </p>
          <h3 className="font-bold">Selected work</h3>
          <ul className="list-disc list-outside">
            <li>
              Conceptualise and lead the migration of an existing React legacy
              application to a modern tech-stack based on create-react-app and
              TypeScript.
            </li>
            <li>
              Leading the frontend development team working on Goodyear’s B2C
              eCommerce websites.
            </li>
            <li>
              Migrated legacy build environments from Grunt to Webpack to
              enhance the developer experience.
            </li>
            <li>Retro-fitted responsive design for EMEA B2B platform.</li>
            <li>
              Designed and developed Ionic-based mobile app for market research
              purposes.
            </li>
          </ul>
        </TabularEntry>
      </dl>

      <SubHeading>Education</SubHeading>
      <dl>
        <TabularEntry term="2000-2003">
          <strong>Goodyear Dunlop Tires Germany GmbH, Fulda</strong> <br />
          Apprenticeship IT specialist
        </TabularEntry>
        <TabularEntry term="1999-2000">
          <strong>DJO Landesheim, Rodholz</strong> <br />
          Community service
        </TabularEntry>
        <TabularEntry term="1997-1999">
          <strong>Richard Müller Schule, Fulda</strong> <br />
          Fachabitur »Wirtschaft & Verwaltung«
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
  </Page>
);

export default CV;
