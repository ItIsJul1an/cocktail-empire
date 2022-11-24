import { CocktailEntity, Ingredient } from "./model/cocktail"
import produce from "immer"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m"

class CocktailService {
    async fetchCocktails() {

        const response = await fetch(url)
        let cocktails: [CocktailEntity] = await response.json()

        let drinks = eval("cocktails['drinks']")
        let readyDrinks = []

        for (let drink of drinks) {

            const ingr: Ingredient[] = []

            for (let i = 1; i <= 15; i++) {
                const ing = drink[`strIngredient${i}`]
                const me = drink[`strMeasure${i}`]
                if (ing !== null) {
                    ingr.push({
                        name: ing,
                        measure: me
                    })
                }
            }

            const c: CocktailEntity = {
                strDrink: drink['strDrink'], strVideo: drink['strVideo'], strAlcoholic: drink['strAlcoholic'],
                strGlass: drink['strGlass'], strInstructions: drink['strInstructions'],
                strDrinkThumb: drink['strDrinkThumb'], strIngredients: ingr
            }

            readyDrinks.push(c)
        }
    }
}
const cocktailService = new CocktailService()
export default cocktailService
