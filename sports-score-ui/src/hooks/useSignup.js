import { useMutation } from '@tanstack/react-query';
import esportsService from '../globalServices/service';

const useSignup = (options = {}) => {
  const mutation = useMutation({
    mutationKey: ['signup'],
    mutationFn: (payload) => esportsService.signup(payload),
    onSuccess: (data, variables, context) => {
      options.onSuccess?.(data, variables, context);
      return data;
    },
    onError: (error, variables, context) => {
      options.onError?.(error, variables, context);
      return error;
    },
    ...options,
  });
  return mutation;
};

export default useSignup; 