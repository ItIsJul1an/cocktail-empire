import { html, render } from "lit-html"
import store from "../model/store"
import cocktailService from "../cocktail-service"
import { CocktailEntity } from "../model/cocktail"

const tableTemplate = html`
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Id</th><th>Drink</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (cocktail: CocktailEntity) => html`
<td>${cocktail.id}</td><td>${cocktail.drink}<td>
`

class CocktailTableComponent extends HTMLElement {
    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }
    async connectedCallback(){
        store.subscribe (model => this.render(model.cocktails))
        cocktailService.fetchCocktails()
    }
    private render(cocktails: CocktailEntity[]){
        render(tableTemplate, this.root)
        const body = this.root.querySelector("tbody")
        cocktails.forEach(cocktail =>{
            const row = body.insertRow()
            row.onclick = () => {
                const event = new CustomEvent("cocktail-selected", { detail: { user } })
                this.dispatchEvent(event) 
            }
            render(rowTemplate(cocktail), row)
        })
    }
}
customElements.define("cocktail-table-components", CocktailTableComponent)
 