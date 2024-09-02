// api/github.api.ts
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/constants';

export const fetchFavoriteAuthorsList = async () => {
  const res = await fetch(`${API_URL}/favorite-authors`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data;
};

export const useFavoriteAuthorsList = () => {
  return useQuery({queryKey: ["favorite-authors-list"], queryFn: fetchFavoriteAuthorsList, refetchOnWindowFocus: false});
};