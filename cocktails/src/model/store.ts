import { CocktailEntity } from './cocktail'
import { BehaviorSubject } from 'rxjs'

export interface Store {
    readonly cocktails: CocktailEntity[]
}

const initialState: Store = {
    cocktails: []
}

const store = new BehaviorSubject<Store>(initialState)

export default store