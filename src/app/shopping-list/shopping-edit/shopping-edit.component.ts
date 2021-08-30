import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name:string;
  amount:number;

  @Output() newIngredientadded= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    this.newIngredientadded.emit(new Ingredient(this.name,this.amount));
  }

}
