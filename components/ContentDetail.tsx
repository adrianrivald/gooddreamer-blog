import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Content } from "../services/content/types";
import parse from "html-react-parser";

interface ContentDetailProps {
  data: Content;
  title: string;
}
export function ContentDetail(props: ContentDetailProps) {
  return (
    <div>
      <Head>
        <title>{props?.title} - Gooddreamer Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8 px-8 lg:px-20">
        <Image
          src={props?.data?.image}
          width={1140}
          height={285}
          alt="content-image"
          className="rounded-[10px] w-full h-[285px] object-cover"
        />
        <h1 className="text-[32px] lg:text-[40px] text-purple-primary font-bold mt-14">
          {props?.data?.title}
        </h1>
        {props?.data?.content &&
          parse(
            // DOMPurify.sanitize(
            props?.data?.content
              ?.replaceAll("<p", "<br/><p")
              ?.replaceAll("<img", "<br/><img")
              ?.replaceAll("<hr", "<br/><hr")
              ?.replaceAll("<h1", "<br/><h1")
              ?.replaceAll("<h2", "<br/><h2")
              ?.replaceAll("<h3", "<br/><h3")
              ?.replaceAll("<ul", `<ul className="list-inside list-disc"`)
              ?.replaceAll("<li><br/><p>", "<br/><li>")
              ?.replaceAll("</p></li>", "</li>")
            // )
          )}
      </main>
    </div>
  );
}
