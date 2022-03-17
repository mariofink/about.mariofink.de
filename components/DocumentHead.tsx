import Head from "next/head";

interface props {
  title: string;
  favicon: string;
}

/**
 * Using this neat little trick here to use Emojis as favicons: https://css-tricks.com/emojis-as-favicons/
 */
const DocumentHead = ({ title, favicon }: props) => (
  <Head>
    <html lang="en" />
    <title>{title}</title>
    <meta name="description" content="Mario Fink • Web developer from Fulda" />
    <link
      rel="icon"
      href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
    />
  </Head>
);

export default DocumentHead;
