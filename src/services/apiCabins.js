import supabase from './supabase';

export const getCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error.message);
    throw new Error('could not get cabins');
  }
  return data;
};

export const deleteCabin = async (id) => {
  let { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log(error.message);
    throw new Error('Cabin could not be deleted.');
  }
  return data;
};
