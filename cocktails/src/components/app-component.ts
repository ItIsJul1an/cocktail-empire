import { html, render } from "lit-html"
import "./details-component"
import "./cocktail-table-component"
import store from "../model/store"

const appComponentTemplate = html`
<cocktail-table-component id="table"></cocktail-table-component>
<details-component id="table"></details-component>
`
class AppComponent extends HTMLElement {

    private root: ShadowRoot

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        console.log("AppComponent connected")
        this.renderComponents()
    }

    private renderComponents() {
        render(appComponentTemplate, this.root)

        const tableComponent: HTMLElement = this.shadowRoot.querySelector("cocktail-table-component")
        const detailComponent: HTMLElement = this.shadowRoot.querySelector("details-component")
       
        tableComponent.style.display = "block"
        detailComponent.style.display = "none"

        tableComponent.addEventListener("cocktail-selected", (e: CustomEvent) => {
            const cocktail = e.detail.cocktail

            detailComponent.setAttribute("cocktailid", cocktail.id)
            tableComponent.style.display = "none"
            detailComponent.style.display = "block"
        })
    }
}

customElements.define("app-component", AppComponent)