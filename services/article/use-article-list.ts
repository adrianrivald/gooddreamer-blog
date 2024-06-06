// api/github.api.ts
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchArticleList = async () => {
  const res = await fetch(`${API_URL}/articles`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useArticleList = () => {
  return useQuery({queryKey: ["article-list"], queryFn: fetchArticleList});
};