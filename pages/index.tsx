import Head from "next/head";
import { Announcement } from "../components/Announcement";
import { Article } from "../components/Article";
import { Author } from "../components/Author";
import { Event } from "../components/Event";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gooddreamer Blog</title>
        <meta
          name="description"
          content="Jelajahi artikel menarik dari GoodDreamer"
        />
      </Head>

      <main className="">
        <Hero />
        <Announcement />
        <Event />
        <Author />
        <Article />
        <Faq />
      </main>
    </div>
  );
}
