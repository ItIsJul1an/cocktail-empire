type Ingredient = {
    ingridient: string,
    measure: string
}

export interface Cocktail {
    drink: string,
    video: string,
    alcoholic: string,
    glass: string,
    instruction: string,
    drinkThumb: string,
    ingredients: Ingredient[],
}