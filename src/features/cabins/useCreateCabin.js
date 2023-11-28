import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success('Cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => {
      toast.error('Cabin could not be created');
    },
  });

  return {
    createCabin,
    isLoading,
  };
};
