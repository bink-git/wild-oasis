import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';

function CreateCabinForm({ cabinToEdit }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const queryClient = useQueryClient();

  const { errors } = formState;

  const { mutate, isLoading } = useMutation({
    mutationFn: (newCabin) => createCabin(newCabin),
    onSuccess: () => {
      toast.success('Cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },
    onError: (err) => {
      toast.error('Cabin could not be created');
    },
  });

  const onSubmit = (data) => {
    mutate({ ...data, image: data.image[0] });
  };

  const onError = (error) => {
    // console.log(error);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register('name', { required: 'this field is required' })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isLoading}
          {...register('maxCapacity', {
            required: 'this field is required',
            min: { value: 1, message: 'Minimum capacity is 1' },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isLoading}
          {...register('regularPrice', { required: 'this field is required' })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isLoading}
          {...register('discount', {
            required: 'this field is required',
            validate: (value) =>
              value <= getValues('regularPrice') ||
              'Discount must be less than regular price',
          })}
          defaultValue={0}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isLoading}
          {...register('description', { required: 'this field is required' })}
          defaultValue=""
        />
      </FormRow>

      <FormRow label="Cabin image">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', { required: 'this field is required' })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variations="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
