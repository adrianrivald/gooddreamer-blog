import { useRouter } from "next/router";
import React from "react";
import { ContentDetail } from "../components/ContentDetail";
import { ContentDetailSkeleton } from "../components/ContentDetailSkeleton";
import { useContentById } from "../services/content/use-content-detail";

export default function ContentDetailPage() {
  const router = useRouter();
  const { slug } = router?.query;
  const { data, isFetching, isLoading } = useContentById(slug);
  const contentData = data?.data;

  if (isFetching || isLoading) {
    return <ContentDetailSkeleton />;
  }

  return <ContentDetail data={contentData} title={contentData?.title} />;
}
