// api/github.api.ts
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchBannerList = async () => {
  const res = await fetch(`${API_URL}/banners`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useBannerList = () => {
  return useQuery({queryKey: ["banner-list"], queryFn: fetchBannerList, refetchOnWindowFocus: false});
};
