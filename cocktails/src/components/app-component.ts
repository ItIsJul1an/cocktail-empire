import {html, render} from "lit-html"
import "./details-component"

const template = html `
<details-component id="details"></details-component>
`

class AppComponent extends HTMLElement{
constructor(){
    super()
    this.attachShadow({mode : "open"})
}

connectedCallback(){ //Wird aufgerufen wenn app-component vorkommt und in Baum angehängt wurde
    console.log("Connected")
    this.render()

}

render (){
    render(template, this.shadowRoot)
    const detailsComponent: HTMLElement = this.shadowRoot.getElementById("details")
    detailsComponent.setAttribute("id", "1")
}
}
customElements.define("app-component", AppComponent)