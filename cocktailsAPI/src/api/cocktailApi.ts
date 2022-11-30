/**
 * Run this Express API with npx ts-node cocktailApi.ts
*/
import express, { Request, Response } from 'express'
import CocktailStore from '../model/cocktailStore'

const app = express()
const PORT = 8000

const store = new CocktailStore()

app.get('/api/cocktails', (req: Request, res: Response) => {
    res.send(store.getCocktails())
    console.log(`Got request: URL=${req.url}`)
})

app.listen(PORT, () => console.log(`API listening on port ${PORT}!`))