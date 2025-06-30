const BASE_URL = 'https://dummyjson.com/recipes';

export const getAllRecipes = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data.recipes);
    return data.recipes;
}

export const searchRecipes = async (query) => {
    const response = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.recipes;
}

export const getRecipeById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}