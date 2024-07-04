import Head from "next/head";
import { Hero } from "../../components/Hero";
import { usePromoList } from "../../services/content/use-content-list";
import { Card } from "../../ui/Card";
import React from "react";

export default function PromoPage() {
  const [page, setPage] = React.useState(1);
  const { data } = usePromoList({ page: page.toString() });
  const promos = data?.data;

  return (
    <div>
      <Head>
        <title>Promo - Gooddreamer Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        <div className=" py-8 px-20 mt-14">
          <div className="flex justify-between">
            <h1 className="text-[40px] text-purple-primary font-bold">Promo</h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12 py-4 px-20 mt-4">
          {promos &&
            promos?.map((activity: any) => (
              <Card
                withDetailButton
                image={activity?.thumbnail}
                title={activity?.title}
                content={activity?.content_preview}
                url={`/activity/${activity?.uri}`}
              />
            ))}
        </div>
      </main>
    </div>
  );
}