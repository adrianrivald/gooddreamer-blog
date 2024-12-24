import Head from "next/head";
import { useContentList } from "../../../services/content/use-content-list";
import { Card } from "../../../ui/Card";
import React from "react";
import { Pagination } from "../../../components/Pagination";
import { useRouter } from "next/router";

export default function SeachResultPage() {
  const router = useRouter();
  const { query } = router;
  const page = parseInt((query?.pageIndex as string) ?? 1);
  const { data } = useContentList(page.toString(), query?.q ?? "");
  const contents = data?.data;

  return (
    <div>
      <Head>
        <title>Hasil Pencarian - Gooddreamer Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className=" py-8 px-8 lg:px-20 mt-14">
          <div className="flex justify-between">
            <h1 className="text-[32px] lg:text-[40px] text-purple-primary font-bold">
              Hasil Pencarian : "{query?.q}"
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-4 px-8 lg:px-20 mt-4">
          {contents?.length ? (
            contents?.map((content: any) => (
              <Card
                withDetailButton
                image={content?.thumbnail}
                title={content?.title}
                content={content?.content_preview}
                url={`/${content?.uri}`}
                key={content?.uri}
              />
            ))
          ) : (
            <div>Hasil Pencarian tidak ditemukan</div>
          )}
        </div>
        <div className="py-8 px-8 lg:px-20">
          <Pagination pageName="search" page={page} meta={data?.meta} />
        </div>
      </main>
    </div>
  );
}