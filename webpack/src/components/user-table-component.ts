import {html, render} from "lit-html"

import store from "../model/model"
import { User } from "../model/user"
import userService from "../user-service"

const tableTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Id</th><th>Name</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>
`
const rowTemplate = (user: User) => html`
    <td>${user.id}</td><td>${user.name}</td>
`
class AppComponent extends HTMLElement {
    //private model: Model //Hässlich, keine Single Source of truth, ferstoß --> Die lebensdauer des Models lebt solange wie die Tabel, wenn man mehrere Tables hat, mehrere Models (nocht gut) / Daten nocht in der Komponente halter
    private root: ShadowRoot
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }
    async connectedCallback() {
        //model.users = {
         //   users: new Array<User>()
        //}
        store
        //.map()
        //.pipe()
        //.distinctUntilChanged
        .subscribe(model => this.render(model.users))
        userService.fetchUsers() //Asynchron wird ein download aufgerufen, sofort tabelle mahlen aber daten sind noch nicht geladen/ Lösung: Observables (Observerpattern!) Ractive Extensions, RxJs / Kette an abrufen kann gemacht werden 
        //Subject ist eine Observable die value hat
        //BehaviorSubject = immer wenn jamand subscribed, den aktuellen wert schickt
        //npm install rxjs
        
        //console.log("AppComponent connected", model)
       // this.render(model.users)
    }
    private render(users: User[]) {
        render(tableTemplate, this.root)
        const body = this.root.querySelector("tbody")
        users.forEach(user => {
            const row = body.insertRow()
            row.onclick = () => {
                //alert(`user ${user.name} ausgewählt`)
                const event = new CustomEvent("user-selected", {detail:{user}}) //Custom Event kann man selbst erfinden, hier wird json user mitgegeben
                this.dispatchEvent(event)
            }
            render(rowTemplate(user), row) //Fügt userdaten ein
        })
    }
}
customElements.define("user-table-component", AppComponent)