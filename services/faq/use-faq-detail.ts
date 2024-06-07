// api/github.api.ts
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchFaqId = async (faqId: number) => {
  const res = await fetch(`${API_URL}/faq/${faqId}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useFaqById = (faqId: number) => {
  return useQuery({queryKey: ["faq-detail"], queryFn: () => fetchFaqId(faqId)});
};