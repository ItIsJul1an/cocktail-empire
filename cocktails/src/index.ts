import cocktailService from "./cocktail-service";
import "./components/app-component"

document.querySelector("body").appendChild(document.createElement("app-component"))

cocktailService.fetchCocktails()

