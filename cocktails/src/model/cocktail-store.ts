import { Cocktail } from "./cocktail"
import { BehaviorSubject } from "rxjs"

//Singel - Source - Of - Truth
export interface CocktailStore {
    readonly cocktails: Cocktail[]
}
const initialState: CocktailStore = {
    cocktails: []
}

const cocktailStore = new BehaviorSubject<CocktailStore>(initialState)
export default cocktailStore


