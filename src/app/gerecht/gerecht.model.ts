export class INGREDIENT {
  name: string;
  amount: number;
  unit: string;
  image: string;
   constructor(name: string, amount: number, unit: string, image: string) {
    this.name = name;
    this.amount = amount;
    this.unit = unit;
    this.image =  image;
  }
}

export class Gerecht {
  public id: number;
  public title: string;
  public readyInMinutes: number;
  public image: string;
  public instructions: string;
  public vegetarian: boolean;
  public vegan: boolean;
  public cheap: boolean;
  public servings: number;
  public preperationMinutes: number;
  public cookingMinutes: number;
  public sourceUrl: string;
public extendsIngredients: INGREDIENT[];


  constructor(id: number, title: string, readyInMinutes: number, image: string, instructions: string, vegetarian: boolean,
              vegan: boolean, cheap: boolean,
              servings: number, preperationMinutes: number, cookingMinutes: number, sourceUrl: string, extendsIngredients: INGREDIENT[]) {
  this.id = id;
  this.title = title;
  this.readyInMinutes = readyInMinutes;
  this.image = image;
  this.instructions = instructions;
  this.vegan = vegan;
  this.vegetarian = vegetarian;
  this.cheap = cheap;
  this.servings =  servings;
  this.preperationMinutes = preperationMinutes;
  this.cookingMinutes = cookingMinutes;
  this.sourceUrl = sourceUrl;
  this.extendsIngredients = extendsIngredients;
  }
}
