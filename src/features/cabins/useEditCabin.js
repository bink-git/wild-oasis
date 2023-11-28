import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      toast.success('Cabin successfully updated');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => {
      toast.error('Cabin could not be created');
    },
  });

  return {
    editCabin,
    isEditing,
  };
};
