export class Recipes{
  public id: number;
  public title: string;
  public image: string;
  public imageType: string;
  public usedIngredientCount: number;
  public missedIngredientCount: number;
  public likes: number;


  constructor(id: number, title:string, image:string, imageType: string,usedIngredientCount: number, missedIngredientCount: number, likes: number)
  {
    this.id=id;
    this.title=title;
    this.image=image;
    this.imageType=imageType;
    this.usedIngredientCount=usedIngredientCount;
    this.missedIngredientCount=missedIngredientCount;
    this.likes=likes;
  }
}
