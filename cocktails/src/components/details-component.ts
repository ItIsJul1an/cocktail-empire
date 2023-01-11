import {html, render} from "lit-html"
import { SourceMapDevToolPlugin } from "webpack"

import {CocktailEntity} from "../model/cocktail"
import {Ingredient} from "../model/cocktail"
import store from "../model/store"

let id = 1
let currentCocktail:CocktailEntity;

const tableCocktailTemplate = html`
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    
    <img id="cocktailImage" alt="Cocktail Picture" width="200px">
    
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>ID</th><th>Name</th><th>Alcoholic</th><th>Glass</th><th>Instructions</th>
            </tr>
        </thead>
        <tbody class="tbody1"></tbody>
    </table>
    `
    const tableIngredientTemplate = html`
    <table class="w3-table w3-striped w3-bordered">
        <thead>
            <tr>
            <th>Name</th><th>Measure</th>
            </tr>
        </thead>
        <tbody class="tbody2"></tbody>
    </table>
    <br><br>
    <iframe width="420" height="315" class ="video">
    <iframe width="420" height="315" class ="video">
    </iframe>
    `

const rowCocktailTemplate = (cocktail: CocktailEntity) => html`
    <td>${cocktail.id}</td><td>${cocktail.drink}</td><td>${cocktail.alcoholic}</td><td>${cocktail.glass}</td><td>${cocktail.instructions}</td>
`

const rowIngedientTemplate = (ingredient: Ingredient) => html`
    <td>${ingredient.name}</td><td>${ingredient.name}</td>
`

class AppComponent extends HTMLElement{
    private root: ShadowRoot

    static get observedAttributes() {
        return ["id"]
    }

    constructor() {
        super()
        this.root = this.attachShadow({ mode: "closed" })
    }

    attributeChangedCallback(name: string, oldValue: number, value: number) {
        id = value
        console.log("TODO: display user", value)
        
    }

    async connectedCallback() {
        setTimeout(()=> {
        store.subscribe(model => this.getCocktailById(model.cocktails))
        this.render()
            },6000)
        
    }

    private render() {
        render(tableCocktailTemplate, this.root)
       // render(tableIngredientTemplate, this.root)

        const body1:HTMLTableSectionElement = this.root.querySelector(".tbody1")
        const body2:HTMLTableSectionElement = this.root.querySelector(".tbody2")

        console.log(body1)
        console.log("Current Cocktail "+currentCocktail)

        const image = this.root.getElementById("cocktailImage") as HTMLImageElement
        image.src=currentCocktail.drinkThumb

        const video = this.root.querySelector(".video") as HTMLIFrameElement
        // video.src=currentCocktail.video
        //console.log(video)
        //video.src = "https://www.youtube.com/watch?v=LEkyOWW80U8"



        const row1 = body1.insertRow()
        console.log(currentCocktail.drinkThumb + " cool")
        render(rowCocktailTemplate(currentCocktail), row1)

        const iframe = document.createElement("iframe");
        this.root.append(iframe)
        console.log(iframe)
        iframe.src ="https://www.youtube.com/embed?v=LEkyOWW80U8"
        body2.append(iframe);

        currentCocktail.ingredients.forEach(ingredient =>{
            const row2 = body2.insertRow()
            render(rowIngedientTemplate(ingredient), row2)
        })
        
    }

    getCocktailById(cocktails :CocktailEntity[]): CocktailEntity{
        cocktails.forEach(cocktail =>{
            if (cocktail.id == id){
                currentCocktail = cocktail;
            }
        })
        return(null);
    }

}
customElements.define("details-component", AppComponent)