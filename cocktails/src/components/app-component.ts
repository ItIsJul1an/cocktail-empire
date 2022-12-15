import { html, render } from "lit-html"
import "./cocktail-table-component"

const template = html`
<h1>Cocktails</h1>
<cocktail-table-component id="table">
</cocktail-table-component>
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
    }
}
customElements.define("app-component", AppComponent)
