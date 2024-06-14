import { useRouter } from "next/router";
import React from "react";
import { ContentDetail } from "../../components/ContentDetail";
import { useContentById } from "../../services/content/use-content-detail";

export default function AnnouncementDetail() {
  const router = useRouter();
  const { slug } = router?.query;
  const { data } = useContentById(slug);
  const contentData = data?.data;
  return <ContentDetail data={contentData} title={contentData?.title} />;
}
