import userService from "./user-service"
import "./components/app-component"

document.querySelector("body").appendChild(document.createElement("app-component"))

/*const text = "hello" + ", world"
console.log(text)

onLoad()

async function onLoad() {
    const users = await userService.fetchUsers()
    console.log("users:", users)
}*/

