import { html, render } from "lit-html"
import { SourceMapDevToolPlugin } from "webpack"

import { CocktailEntity } from "../model/cocktail"
import { Ingredient } from "../model/cocktail"
import store from "../model/store"


const tableHTML = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" type="text/css" href="../styles/index.css">
    <h1 id="headline" style="font-weight:bold;text-align:center;margin-bottom:35px"></h1>
    
    <div style="height: 80vh;margin-bottom:35px">
        <iframe style="display:flex;justify-content:center;margin-bottom:35px" width="100%" height="100%" id="frame" allow='autoplay'></iframe>
    </div>

    <h2 style="font-weight:bold;margin-bottom:35px">Details</h2>

    <table class="w3-table w3-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Alcoholic </th>
                <th>Glass</th>
                <th>Instructions</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody class="mainTable"></tbody>
    </table>
    </br></br>
    <table class="w3-table w3-bordered">
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

    <a href="/">← Back to overview</a></br>
`

const rowCocktailTemplate = (cocktail: CocktailEntity) => html`
    <td>${cocktail.id}</td><td>${cocktail.drink}</td><td>${cocktail.alcoholic}</td><td>${cocktail.glass}</td><td>${cocktail.instructions}</td>
    <td><img src="${cocktail.drinkThumb}" width="200"></td>
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
        this.root.getElementById("headline").innerHTML = "" + this.currentCocktail.drink

        const mainTable: HTMLTableSectionElement = this.root.querySelector(".mainTable")
        const ingredientsTable: HTMLTableSectionElement = this.root.querySelector(".ingredientsTable")

        // Set iframe
        const frame = this.root.getElementById("frame") as HTMLIFrameElement
        frame.src = this.currentCocktail.video.replace("watch?v=", "embed/") + "?autoplay=1"

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