import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useCreateCabin } from './useCreateCabin';
import { useEditCabin } from './useEditCabin';

function CreateCabinForm({ cabinToEdit = {} }) {
  const { isLoading, createCabin } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const isWorking = isLoading || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const editMode = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editMode ? editValues : {},
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (editMode) {
      editCabin(
        { newCabin: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    } else {
      createCabin(
        { ...data, image: data.image[0] },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    }
    // mutate({ ...data, image: data.image[0] });
    console.log(data);
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
          disabled={isWorking}
          {...register('name', { required: 'this field is required' })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
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
          disabled={isWorking}
          {...register('regularPrice', { required: 'this field is required' })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
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
          {...register('description', { required: 'this field is required' })}
        />
      </FormRow>

      <FormRow label="Cabin image">
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: editMode ? false : 'this field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variations="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {editMode ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
