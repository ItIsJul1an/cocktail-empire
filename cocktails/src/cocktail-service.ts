import { CocktailEntity, Ingredient } from "./model/cocktail"
import store from "./model/store"
import produce from "immer"

const url = "http://172.16.100.180:5000/search/m"

class CocktailService {

    async fetchCocktails() {
        const response = await fetch(url)
        let cocktails: [CocktailEntity] = await response.json()
        let nextState = produce(store.getValue(), draft => {
            draft.cocktails = cocktails
        })

        store.next(nextState)
    }
}

const cocktailService = new CocktailService()

export default cocktailService
