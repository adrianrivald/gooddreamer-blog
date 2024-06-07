import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../../constants/constants";
import toast from 'react-hot-toast';

export function useFaqReact() {
  return useMutation({
    mutationFn: async (data: {like: boolean, faqId: number}) => {
     
        return fetch(`${API_URL}/faq/${data?.faqId}/react`, {
            method: "POST",
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                like: data?.like,
            })
          }).then(res => res.json());
    },
    onSuccess: () => {
        toast.success('Terimakasih atas feedbacknya!')
      },
      onError: (error) => {
        toast.error('Terjadi error, silakan coba lagi')
      },
  })
    
}
