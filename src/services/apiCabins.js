import supabase from './supabase';

export const getCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error.message);
    throw new Error('could not get cabins');
  }
  return data;
};
