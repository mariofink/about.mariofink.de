import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Tech() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Mario Fink • Tools & Technologies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="py-16 container mx-auto px-6 max-w-prose">
        <h1 className="text-6xl font-bold">Tools & Technologies</h1>
        <p className="mt-6">
          The frontend development world is still a fast-changing environment.
          Today’s hot stuff is tomorrow’s legacy technology.
        </p>
        <h2 className="mt-6 mb-3 text-3xl font-bold">Working with right now</h2>
        <ul className="list-disc list-inside">
          <li>React</li>
          <li>Redux & Redux Toolkit</li>
          <li>Webpack</li>
          <li>Adobe Experience Manager</li>
        </ul>
        <h2 className="mt-6 mb-3 text-3xl font-bold">
          Worked with in the past
        </h2>
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
