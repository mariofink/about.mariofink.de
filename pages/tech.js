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
      </main>

      <Footer />
    </div>
  );
}
