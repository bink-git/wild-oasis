import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import { deleteCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin deleted');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <TableRow role="row">
      <Img src={cabin.image} alt={cabin.name} />
      <Cabin>{cabin.name}</Cabin>
      <div>{cabin.maxCapacity}</div>
      <Price>{formatCurrency(cabin.regularPrice)} €</Price>
      <Discount>{formatCurrency(cabin.discount)}</Discount>
      <button onClick={() => mutate(cabin.id)} disabled={isDeleting}>
        Delete
      </button>
    </TableRow>
  );
};
export default CabinRow;
