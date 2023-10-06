import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tools from "@/components/uncommon/Tools";
import Whyus from "@/components/uncommon/Whyus";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Script Scanner</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Whyus />
      <Tools/>
      <Footer />
    </>
  );
}
