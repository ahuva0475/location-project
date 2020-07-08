import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/models/category';
import { Locations } from 'src/models/location';
import { Coordinate } from 'src/models/coordinate';


@Component({
  selector: 'editCategoryForm',
  templateUrl: './editCategoryForm.component.html',
  styleUrls: ['./editCategoryForm.component.css']
})
export class EditCategoryForm {

  constructor(){
    this.location = new Locations(0,null,null,new Coordinate(null,null),new Category(null));
  }
  @Input()
  location: Locations;
  @Input()
  isEditLocation:boolean;
  @Output()
  onAddNewLocation: EventEmitter<any> = new EventEmitter<any>();


  toAddLocation(){
    this.onAddNewLocation.emit(this.location)
  }
}