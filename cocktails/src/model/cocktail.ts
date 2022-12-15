export type Ingredient = {
    readonly name: string,
    readonly measure: string
}

export interface CocktailEntity {
    readonly id: number,
    readonly drink: string,
    readonly video: string,
    readonly alcoholic: boolean,
    readonly glass: string,
    readonly instructions: string,
    readonly drinkThumb: string,
    readonly ingredients: Ingredient[]
}