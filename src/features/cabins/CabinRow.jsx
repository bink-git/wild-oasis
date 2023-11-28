import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import empty from '../../data/cabins/empty.jpg';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.2fr 2.2fr 1fr 1fr 1fr;
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
  const {
    id: cabinId,
    image,
    name,
    maxCapacity: capacity,
    regularPrice: price,
    discount,
  } = cabin;

  const [showForm, setShowForm] = useState(false);

  const { isDeleting, deleteCabin } = useDeleteCabin(cabinId);

  return (
    <>
      <TableRow role="row">
        <Img src={image ? image : empty} alt={name} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {capacity} guests</div>
        <Price>{formatCurrency(price)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}

        <div>
          <button onClick={() => setShowForm((show) => !show)}>Edit</button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
