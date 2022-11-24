export type Ingredient = {
    name: string,
    measure: string
}

export interface CocktailEntity {
    strDrink: string,
    strVideo?: string,
    strAlcoholic: string, 
    strGlass: string, 
    strInstructions: string, 
    strDrinkThumb: string, 
    strIngredients: Ingredient[]
}