import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        <title>Ashandi's XXI</title>

        <Header />
        <Component {...pageProps} />
      </Head>
    </>
  );
}
export default MyApp;
