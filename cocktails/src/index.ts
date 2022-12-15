import cocktailService from "./cocktail-service"
import "./components/app-component"

//cocktailService.fetchCocktails()

const body= document.querySelector("body")
const appComponent = document.createElement("app-component")
body.appendChild(appComponent)

