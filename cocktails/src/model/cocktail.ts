export type Ingredient = {
    name: string,
    measure: string
}

export interface CocktailEntity {
    id: number,
    drink: string,
    video: string,
    alcoholic: boolean,
    glass: string,
    instructions: string,
    drinkThumb: string,
    ingredients: Ingredient[]
}