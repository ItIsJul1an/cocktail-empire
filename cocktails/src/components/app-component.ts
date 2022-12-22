import { html, render } from "lit-html"
import "./cocktail-table-component"

const template = html`
<h1>Cocktails</h1>
<cocktail-table-component id="table">
</cocktail-table-component>
<cocktail-component id="cockt"></cocktail-component>
`



class AppComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }
    connectedCallback() {
        console.log("connected")
        this.render()

    }
    render() {
        render(template, this.shadowRoot)
        const cocktailTableComponent = this.shadowRoot.getElementById("table")
        const cocktailComponent : HTMLElement = this.shadowRoot.querySelector("cocktail-component")
        cocktailTableComponent.addEventListener("cocktail-selected", (e: CustomEvent)=>{
            const cocktail = e.detail.cockt
            console.log("cocktail Selected", cocktail)
            cocktailComponent.setAttribute("id", cocktail.id)
            cocktailTableComponent.style.display = "none"
            cocktailComponent.style.display ="block"
        })
    }
}
customElements.define("app-component", AppComponent)
