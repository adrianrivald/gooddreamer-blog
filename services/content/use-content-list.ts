import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchContentList = async (slug: string, page: string, isHome?: boolean, ) => {
  const res = await fetch(`${API_URL}/contents?` + new URLSearchParams({
    // category=${slug}&limit=${isHome ? "8" : "10"}
    category: slug,
    limit: isHome ? "8" : "5",
    page: page
  }));
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

interface ContentProps {
  isHome? : boolean
  page?: string
}

export const useArticleList = ({isHome, page = '1'} : ContentProps) => {
  return useQuery({queryKey: ["article-list", page], queryFn: () =>fetchContentList("article", page, isHome)});
};

export const useAnnouncementList = (page = "1") => {
  return useQuery({queryKey: ["announcement-list", page], queryFn: () =>fetchContentList("announcement", page)});
};

export const usePromoList = (page = "1") => {
  return useQuery({queryKey: ["promo-list", page], queryFn: () =>fetchContentList("promo", page)});
};

export const useActivityList = (page = "1") => {
  return useQuery({queryKey: ["activity-list", page], queryFn: () =>fetchContentList("activity", page)});
};