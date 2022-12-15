import {html, render} from "lit-html"

import {CocktailEntity} from "../model/cocktail"
import {Ingredient} from "../model/cocktail"
import store from "../model/store"
import CocktailService from "../cocktail-service"
import cocktailService from "../cocktail-service"

let id = 0

const tableCocktailTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <img src="" alt="Cocktail Picture">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>ID</th><th>Name</th><th>Alcoholic</th><th>Glass</th><th>Instructions</th>
            </tr>
        </thead>
        <tbody class="tbody1"></tbody>
    </table>
    `
    const tableIngredientTemplate = html`
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Name</th><th>Measure</th>
            </tr>
        </thead>
        <tbody class="tbody2"></tbody>
    </table>
    `

const rowCocktailTemplate = (cocktail: CocktailEntity) => html`
    <td>${cocktail.id}</td><td>${cocktail.drink}</td><td>${cocktail.alcoholic}</td><td>${cocktail.glass}</td><td>${cocktail.instructions}</td>
`

const rowIngedientTemplate = (ingredient: Ingredient) => html`
    <td>${ingredient.name}</td><td>${ingredient.name}</td>
`

class AppComponent extends HTMLElement{
    private root: ShadowRoot

    static get observedAttributes() {
        return ["id"]
    }

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }

    async connectedCallback() {
        this.render()
    }


    private render() {
        render(tableCocktailTemplate, this.root)
        render(tableIngredientTemplate, this.root)

        const body1:HTMLTableSectionElement = this.root.querySelector("tbody1")
        const body2:HTMLTableSectionElement = this.root.querySelector("tbody2")

        let currentCocktail:CocktailEntity = this.getCocktailById()


        const row1 = body1.insertRow()
        render(rowCocktailTemplate(currentCocktail), row1)


        currentCocktail.ingredients.forEach(ingredient =>{
            const row2 = body1.insertRow()
            render(rowIngedientTemplate(ingredient), row2)
        })

        


    }

    getCocktailById(): CocktailEntity{
        store.value.cocktails.forEach(cocktail =>{
            if (cocktail.id == id){
                return cocktail;
            }
        })
        return(null);
    }

}
customElements.define("user-table-component", AppComponent)