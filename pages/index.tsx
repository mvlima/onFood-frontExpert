import type { NextPage } from "next";
import Head from "next/head";
import { PageTemplate, Search } from "@/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTemplate>
        <h1>Encontre as opções de delivery próximas a você.</h1>
        <Search />
        <h2>
          Descubra seu novo Delivery favorito. Milhares de opções a um clique.
        </h2>
      </PageTemplate>
    </>
  );
};

export default Home;
