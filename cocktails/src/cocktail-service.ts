import { Cocktail } from "./model/cocktail";
import cocktail from "./model/cocktail-store"
import produce from "immer"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m"

class CocktailService{
    async fetchCocktails(){

        const response = await fetch(url)
        let model = cocktail.getValue()
        let cocktails: [Cocktail]  = await response.json()
        let nextState = produce(cocktail.getValue(), draft =>{
            draft.cocktails = cocktails
        })
        cocktail.next(nextState)
        console.log(model);
        
    }


}
const cocktailService = new CocktailService()
export default cocktailService;