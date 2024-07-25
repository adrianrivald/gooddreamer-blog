import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchContentById = async (contentId: string | string[] | undefined) => {
  const res = await fetch(`${API_URL}/contents/${contentId}`);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useContentById = (contentId: string | string[] | undefined) => {
  return useQuery({queryKey: ["content-detail"], queryFn: () => fetchContentById(contentId), refetchOnWindowFocus: false});
};