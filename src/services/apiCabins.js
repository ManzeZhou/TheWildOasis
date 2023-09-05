import supabase from "./supabase.js";

export async function getCabins() {

    const { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.log(error);
        throw new Error('Cabin could not be loaded');
    }

    return data;
}