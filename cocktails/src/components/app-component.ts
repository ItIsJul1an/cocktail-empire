import { html, render } from "lit-html"
import "./details-component"
import store from "../model/store"

const template = html`
<details-component id="details"></details-component>
`

class AppComponent extends HTMLElement {

    private root: ShadowRoot

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })
    }

    connectedCallback() { //Wird aufgerufen wenn app-component vorkommt und in Baum angehängt wurde
        console.log("Connected")
        this.renderComponents()
    }

    private renderComponents() {
        render(template, this.root)

        
            const detailsComponent: HTMLElement = this.shadowRoot.querySelector("details-component")
            detailsComponent.setAttribute("cocktailId", "17180")
            

            console.log(store.getValue().cocktails)
    }
}

customElements.define("app-component", AppComponent)