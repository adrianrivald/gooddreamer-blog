// api/github.api.ts
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchFaqList = async () => {
  const res = await fetch(`${API_URL}/faq`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useFaqList = () => {
  return useQuery({queryKey: ["faq-list"], queryFn: fetchFaqList});
};

export const fetchFaqHomeList = async () => {
  const res = await fetch(`${API_URL}/faq-home`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useFaqHomeList = () => {
  return useQuery({queryKey: ["faq-home-list"], queryFn: fetchFaqHomeList, refetchOnWindowFocus: false});
};