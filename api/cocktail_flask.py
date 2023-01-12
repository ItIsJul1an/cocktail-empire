from dataclasses import dataclass

import requests
from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@dataclass
class Ingredient:
    name: str
    measure: str


@dataclass
class Cocktail:
    id: int
    alcoholic: bool
    video: str
    category: str
    drink: str
    drinkThumb: str
    glass: str
    ingredients: [Ingredient]


def get_cocktails(m):
    resp = requests.get(f"https://www.thecocktaildb.com/api/json/v2/1/search.php?f={m}")
    cocktails = []

    try:
        drinks = resp.json()['drinks']
        if drinks is None:
            raise Exception
    except Exception:
        return []

    for d in drinks:
        ingredients = []
        for i in range(1, 10):
            if d['strIngredient' + str(i)]:
                ingredients.append(Ingredient(d['strIngredient' + str(i)], d['strMeasure' + str(i)]))

        if d['strVideo'] is not None:
            cocktails.append(
                Cocktail(int(d['idDrink']), d['strAlcoholic'] == 'Alcoholic', d['strVideo'], d['strCategory'],
                         d['strDrink'], d['strDrinkThumb'], d['strGlass'], ingredients))
    return cocktails


@app.route('/all')
@cross_origin()
def all_cocktails():
    all_ct = []
    for c in "abcdefghijklmnopqrstuvwxyz":
        all_ct.extend(get_cocktails(c))

    return jsonify(all_ct)


@app.route('/search/<search>')
@cross_origin()
def with_search(search):
    cocktails = get_cocktails(search)
    return jsonify(cocktails)


if __name__ == '__main__':
    app.run(host="172.16.100.180")
