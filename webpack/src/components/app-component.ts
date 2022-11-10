import {html, render} from "lit-html"
import "./user-table-component"
import "./user-component"

const template = html `
<user-table-component id="table"> </user-table-component>
<user-component id="user"></user-component>
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
    const userTableComponent = this.shadowRoot.getElementById("table")
    const userComponent: HTMLElement = this.shadowRoot.getElementById("user")
    userTableComponent.addEventListener("user-selected", (e: CustomEvent) =>{ //wenn in user-tabel-component user-selected ausgefüht wird dann wird das ausgefühts
        const user = e.detail.user
        console.log("Detail selected", e.detail.user)
        userComponent.setAttribute("id", user.id)
        userTableComponent.style.display = "none"
        userComponent.style.display = "block"
    })
}
}
customElements.define("app-component", AppComponent)