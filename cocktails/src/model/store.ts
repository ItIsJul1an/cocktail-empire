import { CocktailEntity } from './cocktail'
import { BehaviorSubject } from 'rxjs'

export interface Store {
    readonly cocktails: CocktailEntity[]
    getCocktailById(id: number): CocktailEntity
}

const initialState: Store = {
    cocktails: [],
    getCocktailById: function (id: number): CocktailEntity {
        let entity: CocktailEntity = null

        this.cocktails.forEach((cocktail: CocktailEntity) => {
            if (cocktail.id == id) {
                entity = cocktail
            }
        })
        
        return entity;
    }
}

const store = new BehaviorSubject<Store>(initialState)

export default store