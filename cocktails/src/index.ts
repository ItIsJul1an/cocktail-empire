import cocktailService from "./cocktail-service"
import "./components/app-component"
import "./styles/index.css"

const body= document.querySelector("body")
const appComponent = document.createElement("app-component")
body.appendChild(appComponent)