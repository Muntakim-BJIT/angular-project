import { Component, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name:string;
  amount:number;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    this.shoppingListService.addNewIngredient(new Ingredient(this.name,this.amount));
  }

}
