import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Content } from "../services/content/types";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

interface ContentDetailProps {
  data: Content;
  title: string;
}
export function ContentDetail(props: ContentDetailProps) {
  return (
    <div>
      <Head>
        <title>{props?.title} - Gooddreamer Blog</title>
        <meta name="description" content={props?.data?.content_preview} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-8 px-8 lg:px-20">
        <Image
          src={props?.data?.image}
          width={1140}
          height={385}
          alt="content-image"
          className="rounded-[10px] w-full max-h-[400px] object-contain"
        />
        <h1 className="text-[32px] lg:text-[40px] text-purple-primary font-bold mt-14">
          {props?.data?.title}
        </h1>
        {props?.data?.content &&
          parse(
            DOMPurify.sanitize(
              props?.data?.content
                ?.replaceAll(`<a `, `<a style="color:blue"`)
                ?.replaceAll("<p", "<br/><p")
                ?.replaceAll("<img", "<br/><img")
                ?.replaceAll("<hr", "<br/><hr")
                ?.replaceAll("<h1", "<br/><h1")
                ?.replaceAll("<h2", "<br/><h2")
                ?.replaceAll("<h3", "<br/><h3")
                ?.replaceAll(
                  "<ul",
                  `<ul style="list-style-type:disc;list-style-position:inside"`
                )
                ?.replaceAll(
                  "<ol",
                  `<ol style="list-style-type:decimal;list-style-position:inside"`
                )
                ?.replaceAll("<li><br/><p>", "<br/><li>")
                ?.replaceAll("</p></li>", "</li>")
                ?.replaceAll(
                  "<h1",
                  `<h1 style="font-size:3rem;font-weight:bold" `
                )
                ?.replaceAll(
                  "<h2",
                  `<h2 style="font-size:1.875rem;font-weight:bold" `
                )
                ?.replaceAll(
                  "<h3",
                  `<h3 style="font-size:1.5rem;font-weight:bold" `
                ),
              {
                ADD_ATTR: ["target"],
              }
            )
          )}
      </main>
    </div>
  );
}
