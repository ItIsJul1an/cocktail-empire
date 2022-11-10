import {html, render} from "lit-html"
import "./app-component"

const template = html `
<div>
User: Max Musermann
</div>
`

class UserComponent extends HTMLElement{

    static get observedAttributs(){
        return ["id"]
    }

constructor(){
    super()
    this.attachShadow({mode : "open"})
}

attributeChangedCallback(name :string, oldValue : string, value : string){
    console.log("Todo: display user", value)
}

connectedCallback(){ //Wird aufgerufen wenn app-component vorkommt und in Baum angehängt wurde
    console.log("user connected")
    this.render()
}

private render (){
    render(template, this.shadowRoot)
}
}
customElements.define("user-component", UserComponent)