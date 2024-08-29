import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

interface ContentParams {
  slug?: string;
  page: string;
  isHome?: boolean;
  q?: string | string[]
}

export const fetchContentList = async (content : ContentParams) => {
  const res = await fetch(`${API_URL}/contents?` + new URLSearchParams({
   ...content as any,
   limit: content?.isHome ? "8" : "10",
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
  q?: string;
}

export const useArticleList = ({isHome, page = '1'} : ContentProps) => {
  return useQuery({queryKey: ["article-list", page], queryFn: () =>fetchContentList({slug: "article", page: page, isHome})});
};

export const useAnnouncementList = (page = "1") => {
  return useQuery({queryKey: ["announcement-list", page], queryFn: () =>fetchContentList({slug: "announcement", page})});
};

export const usePromoList = (page = "1") => {
  return useQuery({queryKey: ["promo-list", page], queryFn: () =>fetchContentList({slug:"promo", page})});
};

export const useActivityList = (page = "1") => {
  return useQuery({queryKey: ["activity-list", page], queryFn: () =>fetchContentList({slug:"activity", page})});
};

export const useContentList = (page = "1", q?: string | string[]) => {
  return useQuery({queryKey: ["content-list", page], queryFn: () =>fetchContentList({page, q})});
};