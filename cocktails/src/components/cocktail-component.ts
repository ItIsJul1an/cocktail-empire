import {html, render} from  "lit-html"

const template = html`<div>User: Max Mustermann</div> `
class CocktailComponent extends HTMLElement {

static get observedAttributes(){
    return ["id"]
}

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }
    attributeChangedCallback(name: string, oldValue: string, value: string){
        console.log ("TODO: display User", value)
    }
    connectedCallback() {
        console.log("User Connected")
        this.render()
    }

   private render() {
    render(template, this.shadowRoot)
    }
}
customElements.define("cocktail-component", CocktailComponent)