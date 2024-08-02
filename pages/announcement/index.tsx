import Head from "next/head";
import Image from "next/image";
import { Hero } from "../../components/Hero";
import { useAnnouncementList } from "../../services/content/use-content-list";
import { Card } from "../../ui/Card";
import React from "react";
import { Pagination } from "../../components/Pagination";

export default function AnnouncementPage() {
  const { data } = useAnnouncementList("1");
  const announcements = data?.data;

  return (
    <div>
      <Head>
        <title>Pengumuman - Gooddreamer Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className=" py-8 px-20 mt-14">
          <div className="flex justify-between">
            <h1 className="text-[40px] text-purple-primary font-bold">
              Pengumuman
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-4 px-8 lg:px-20 mt-4">
          {announcements &&
            announcements?.map((announcement: any) => (
              <Card
                withDetailButton
                image={announcement?.thumbnail}
                title={announcement?.title}
                content={announcement?.content_preview}
                url={`/${announcement?.uri}`}
                key={announcement?.uri}
              />
            ))}
        </div>
        <div className="py-8 px-8 lg:px-20">
          <Pagination pageName="announcement" page={1} meta={data?.meta} />
        </div>
        s
      </main>
    </div>
  );
}
