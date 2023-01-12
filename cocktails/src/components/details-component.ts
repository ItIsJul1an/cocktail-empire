import { html, render } from "lit-html"
import { SourceMapDevToolPlugin } from "webpack"

import { CocktailEntity } from "../model/cocktail"
import { Ingredient } from "../model/cocktail"
import store from "../model/store"


const tableHTML = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <img id="cocktailImage" alt="Cocktail Picture">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Alcoholic </th>
                <th>Glass</th>
                <th>Instructions</th>
            </tr>
        </thead>
        <tbody class="mainTable"></tbody>
    </table>

    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
                <th colspan="2">Ingredients</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Measure</th>
            </tr>
        </thead>
        <tbody class="ingredientsTable"></tbody>
    </table>
    </br>
    <iframe width="420" height="315" id="ytIframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

`

const rowCocktailTemplate = (cocktail: CocktailEntity) => html`
    <td>${cocktail.id}</td><td>${cocktail.drink}</td><td>${cocktail.alcoholic}</td><td>${cocktail.glass}</td><td>${cocktail.instructions}</td>
`

const rowIngedientTemplate = (ingredient: Ingredient) => html`
    <td>${ingredient.name}</td><td>${ingredient.measure}</td>
`

class DetailsComponent extends HTMLElement {

    private root: ShadowRoot
    private currentCocktail: CocktailEntity;

    static get observedAttributes() {
        return ["cocktailid"]
    }

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(name: string, oldValue: string, value: string) {
        this.currentCocktail = store.getValue().getCocktailById(Number(value))

        console.log(this.currentCocktail)

        const mainTable: HTMLTableSectionElement = this.root.querySelector(".mainTable")
        const ingredientsTable: HTMLTableSectionElement = this.root.querySelector(".ingredientsTable")

        // Set image
        const image = this.root.getElementById("cocktailImage") as HTMLImageElement
        image.src = this.currentCocktail.drinkThumb

        // Set iframe
        const iframe = this.root.getElementById("ytIframe") as HTMLIFrameElement
        iframe.src = "https://www.youtube.com/embed/LEkyOWW80U8"

        // Insert cocktail data
        const row1 = mainTable.insertRow()
        render(rowCocktailTemplate(this.currentCocktail), row1)

        // Insert ingredients
        this.currentCocktail.ingredients.forEach(ingredient => {
            const row2 = ingredientsTable.insertRow()
            render(rowIngedientTemplate(ingredient), row2)
        })
    }

    async connectedCallback() {
        this.render()
    }

    private render() {
        render(tableHTML, this.root)
    }
}

customElements.define("details-component", DetailsComponent)