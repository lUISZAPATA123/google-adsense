import Head from "next/head";
import Gallery from "@components/gallery";
export default function Musica() {
  return (
    <div>
      <Head>
        <title>Musica | CDHO </title>
      </Head>
      <h2>Musica</h2>
      <Gallery />
    </div>
  );
}
