// api/github.api.ts
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchContentList = async (slug: string) => {
  const res = await fetch(`${API_URL}/contents?category=${slug}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useArticleList = () => {
  return useQuery({queryKey: ["article-list"], queryFn: () =>fetchContentList("article")});
};

export const useAnnouncementList = () => {
  return useQuery({queryKey: ["announcement-list"], queryFn: () =>fetchContentList("announcement")});
};

export const usePromoList = () => {
  return useQuery({queryKey: ["promo-list"], queryFn: () =>fetchContentList("promo")});
};

export const useActivityList = () => {
  return useQuery({queryKey: ["activity-list"], queryFn: () =>fetchContentList("activity")});
};