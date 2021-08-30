import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() getFeatured= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  isSelected(featured:string){
    this.getFeatured.emit(featured);
  }

}
