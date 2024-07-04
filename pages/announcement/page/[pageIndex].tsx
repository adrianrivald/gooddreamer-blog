import Head from "next/head";
import Image from "next/image";
import { Hero } from "../../../components/Hero";
import { useAnnouncementList } from "../../../services/content/use-content-list";
import { Card } from "../../../ui/Card";
import React from "react";
import { Pagination } from "../../../components/Pagination";
import { useRouter } from "next/router";

export default function AnnouncementPageIndex() {
  const router = useRouter();
  const { query } = router;
  const page = parseInt((query?.pageIndex as string) ?? 1);
  const { data } = useAnnouncementList(page.toString());
  const announcements = data?.data;

  return (
    <div>
      <Head>
        <title>Pengumuman - Gooddreamer Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        <div className=" py-8 px-20 mt-14">
          <div className="flex justify-between">
            <h1 className="text-[40px] text-purple-primary font-bold">
              Pengumuman
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12 py-4 px-20 mt-4">
          {announcements &&
            announcements?.map((announcement: any) => (
              <Card
                withDetailButton
                image={announcement?.thumbnail}
                title={announcement?.title}
                content={announcement?.content_preview}
                url={`/announcement/${announcement?.uri}`}
              />
            ))}
        </div>
        <div className="py-8 px-8 lg:px-20">
          <Pagination pageName="announcement" page={page} meta={data?.meta} />
        </div>
        s
      </main>
    </div>
  );
}
