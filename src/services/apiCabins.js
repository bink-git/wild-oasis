import supabase, { supabaseUrl } from './supabase';

export const getCabins = async () => {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error.message);
    throw new Error('could not get cabins');
  }
  return data;
};

export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startWith?.(supabaseUrl);

  const imageName = `${Math.floor(Math.random() * 10000000)}-${
    newCabin.image.name
  }`.replaceAll('/', '');

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;

  // const { data: uploadData, error: uploadError } = await supabase.storage
  //   .from('cabins')
  //   .upload(imageName, newCabin.image);

  // https://dhivtflmnftovidsdxup.supabase.co/storage/v1/object/public/cabins/cabin-001.jpg

  let query = supabase.from('cabins');

  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  if (id) {
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq('id', id)
      .select();
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error.message);
    throw new Error('Cabin could not be created.');
  }

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('cabins')
    .upload(imageName, newCabin.image);

  if (uploadError) {
    console.log(uploadError.message);
    await supabase.from('cabins').delete().eq('id', data[0].id);
    throw new Error('Cabin image could not be uploaded.');
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
