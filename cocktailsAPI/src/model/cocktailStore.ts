import { Cocktail } from './cocktail'

/**
 * Represents a storage of cocktails.
 *
 * @class CocktailStore
 */
class CocktailStore {

    /**
     *Array of cocktail.
     * 
     * @type {Cocktail[]}
     * @memberof CocktailStore
     */
    cocktails: Cocktail[]

    /**
     * Creates an instance of CocktailStore.
     * @memberof CocktailStore
     */
    constructor() {
        this.cocktails = [
            {
                drink: 'Martini',
                video: 'https:\/\/www.youtube.com\/watch?v=ApMR3IWYZHI',
                alcoholic: 'Alcoholic',
                glass: 'Cocktail glass',
                instruction: 'Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.',
                drinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/71t8581504353095.jpg',
                ingredients: [
                    { ingridient: 'Gin', measure: '1 2\/3 oz' },
                    { ingridient: 'Dry Vermouth', measure: '1\/3 oz' },
                    { ingridient: 'Olive', measure: '1' }
                ]
            },
            {
                drink: 'Manhattan',
                video: 'https:\/\/www.youtube.com\/watch?v=TFWPtkNoF4Y',
                alcoholic: 'Alcoholic',
                glass: 'Cocktail glass',
                instruction: 'Stirred over ice, strained into a chilled glass, garnished, and served up.',
                drinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yk70e31606771240.jpg',
                ingredients: [
                    { ingridient: 'Sweet Vermouth', measure: '3\/4 oz' },
                    { ingridient: 'Bourbon', measure: '2 1\/1 oz Blended' },
                    { ingridient: 'Angostura bitters', measure: 'dash' },
                    { ingridient: 'Ices', measure: '2 or 3' },
                    { ingridient: 'Maraschino cherry', measure: '1' },
                    { ingridient: 'Orange peel', measure: '1 twist of' }
                ]
            },
            {
                drink: 'Margarita',
                video: 'https:\/\/youtu.be\/XhXgmkP1r3c',
                alcoholic: 'Alcoholic',
                glass: 'Cocktail glass',
                instruction: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
                drinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg',
                ingredients: [
                    { ingridient: 'Tequila', measure: '1 1\/2 oz' },
                    { ingridient: 'Triple sec', measure: '1\/2 oz' },
                    { ingridient: 'Lime juice', measure: '1 oz' },
                    { ingridient: 'Salt', measure: '' },
                ]
            },
            {
                drink: 'Monkey Gland',
                video: 'https:\/\/www.youtube.com\/watch?v=rWxo9gsddXQ',
                alcoholic: 'Alcoholic',
                glass: 'Cocktail glass',
                instruction: 'Shake well over ice cubes in a shaker, strain into a chilled cocktail glass.',
                drinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/94psp81504350690.jpg',
                ingredients: [
                    { ingridient: 'Gin', measure: '2 oz' },
                    { ingridient: 'Benedictine', measure: '1 tsp' },
                    { ingridient: 'Orange juice', measure: '1\/2 oz' },
                    { ingridient: 'Grenadine', measure: '1 tsp' },
                ]
            },
            {
                drink: 'Mojito',
                video: 'https:\/\/youtu.be\/NANdz-YKMUw',
                alcoholic: 'Alcoholic',
                glass: 'Highball glass',
                instruction: 'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
                drinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/metwgh1606770327.jpg',
                ingredients: [
                    { ingridient: 'Light rum', measure: '2-3 oz' },
                    { ingridient: 'Lime', measure: 'Juice of 1' },
                    { ingridient: 'Sugar', measure: '2 tsp' },
                    { ingridient: 'Mint', measure: '2-4' },
                    { ingridient: 'Soda water', measure: '' },
                ]
            }
        ]
    }

    getCocktails(): Cocktail[] {
        return this.cocktails
    }
}

export default CocktailStore