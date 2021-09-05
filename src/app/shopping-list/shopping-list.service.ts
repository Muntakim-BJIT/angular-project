import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIngredientsAdded= new EventEmitter<Ingredient[]>();

  ingredients:Ingredient[]=[
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];
  constructor() { 
    
  }
  getIngredients(){
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.newIngredientsAdded.emit(this.ingredients.slice());
  }
}
