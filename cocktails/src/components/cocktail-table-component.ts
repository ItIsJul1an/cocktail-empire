import { html, render } from "lit-html"
import store from "../model/store"
import cocktailService from "../cocktail-service"
import { CocktailEntity } from "../model/cocktail"

const tableTemplate = html`
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" type="text/css" href="../styles/index.css">
<h1 style="font-weight:bold;margin-bottom:35px">Welcome to Cocktail Empire</h1>

<table class="w3-table w3-striped w3-bordered w3-centered w3-hoverable">
    <thead>
        <tr>
            <th>Id</th>
            <th>Drink</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody></tbody>
    <tfoot>
        <tr>
            <td>
                <span></span>
            </td>
        </tr>
    </tfoot>
</table>
`
const rowTemplate = (cocktail: CocktailEntity) => html`
<td>${cocktail.id}</td>
<td>${cocktail.drink}</td>
<td>
    <img src="${cocktail.drinkThumb}" width="200">
</td>
`

class CocktailTableComponent extends HTMLElement {

    private root: ShadowRoot

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }

    async connectedCallback() {
        console.log("CocktailTableComponent connected")

        store.subscribe(model => this.render(model.cocktails))
        cocktailService.fetchCocktails()
    }

    private render(cocktails: CocktailEntity[]) {
        render(tableTemplate, this.root)

        const foot = this.root.querySelector("tfoot")
        foot.innerHTML = `Total Cocktails: ${cocktails.length}`

        const body = this.root.querySelector("tbody")

        cocktails.forEach(cocktail => {
            const row = body.insertRow()

            row.onclick = () => {
                const event = new CustomEvent("cocktail-selected", { detail: { cocktail } })
                this.dispatchEvent(event)
            }

            render(rowTemplate(cocktail), row)
        })
    }
}

customElements.define("cocktail-table-component", CocktailTableComponent)