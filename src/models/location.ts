import { Category } from "./category";
import { Coordinate } from "./coordinate";

export class Locations{

 constructor(
   public id: number,
   public name: string,
   public address: string,
   public coordinates: Coordinate,
   public category: Category
   ){ }
}