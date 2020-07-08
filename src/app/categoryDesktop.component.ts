import { Component } from '@angular/core';
import { Category } from "../models/category";
import { Locations } from "../models/location";
import { Coordinate } from 'src/models/coordinate';
import { Titles } from 'src/models/title';

@Component({
  selector: 'category-desktop',
  templateUrl: './categoryDesktop.component.html',
  styleUrls: ['./categoryDesktop.component.css']
})
export class CategoryDesktop {

    constructor(){
        this.isViewLocationList = false;
        this.isEditLocation = false;
        this.isEditCategory = false;
        this.isAddLocation = false;
        this.isDeleteCategory = false;
        this.isShowCategoryName = false;
        this.idOfLocation = 10;
        this.title = Titles.ALL;
        this.viewLocationList = [];
        this.checkCategory = new Category(null);
      
    }

    isViewLocationList:boolean;
    isEditLocation:boolean;
    isEditCategory:boolean;
    isAddLocation:boolean;
    isDeleteCategory:boolean;
    isShowCategoryName:boolean;
    idOfLocation:number;
    title:Titles;
    categoryList: Category[];
    locationList: Locations[];
    viewLocationList: Locations[];
    checkCategory: Category;


    ngOnInit(){
        this.categoryList = [
            new Category('Parks'),
            new Category('Restaurants'),
            new Category('Coffee shops'),
            new Category('Customers')
        ];

        this.locationList =[
            new Locations(1,'Park Jerusalem','jerusalem 41', new Coordinate(12.3,14.2),new Category('Parks')),
            new Locations(2,'Park Ramat Gan','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Parks')),
            new Locations(3,'Mahafe Neeman','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Restaurants')),
            new Locations(4,'Restaurant','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Restaurants')),
            new Locations(5,'Coofee Bagel','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Coffee shops')),
            new Locations(6,'Cofee Cofee','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Coffee shops')),
            new Locations(7,'Dan Cohen','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Customers')),
            new Locations(8,'Gad Levi','Ramat Gan 20', new Coordinate(12.3,14.2),new Category('Customers')),

        ];
    }

    toCheckCategory(i:number){
        this.checkCategory = this.categoryList[i];  
        this.viewLocationList = [];
        this.isDeleteCategory = false;  
        this.title = Titles.CHECKED;  
        this.isShowCategoryName = false; 
        this.isEditLocation = false;
        this.isEditCategory = false; 
    }
    toShowDetails(typeOfActive:number){
        this.viewLocationList = this.locationList.filter(r =>r.category.name === this.checkCategory.name);
        this.isShowCategoryName = true;
        switch(typeOfActive){
            case 1:{
                this.checkCategory = new Category(null);
                this.viewLocationList = [];
                this.isEditCategory = true;
                this.isAddLocation = false;
                this.isDeleteCategory = false;
                this.isEditLocation = false;
                this.title = Titles.NEW;
             break;
            }
            case 2:{
                this.isEditCategory = false;
                this.isEditLocation = false;
                this.isAddLocation = false;
                this.isDeleteCategory = false;
                this.title = Titles.VIEW;
                break;

            }
            case 3:{
                this.isEditCategory = false;
                this.isEditLocation = true;
                this.isAddLocation = false;
                this.isDeleteCategory = false;
                this.title = Titles.EDIT;
                break;
                
            }
            case 4:{
                this.isDeleteCategory = true;
                this.isEditCategory = false;
                this.isEditLocation = false;
                this.isAddLocation = false;
                this.title = Titles.DELETE;
            }
        }

    }

    toAddCategory(){
        this.categoryList.push(this.checkCategory);
        this.isEditCategory = false;
        this.isEditLocation = true;
    }

    toKeepLocation(location: Locations){
        location.category.name = this.checkCategory.name;
        if(location.id <= 0){
            location.id = this.idOfLocation++;
            this.locationList.push(location);
            this.viewLocationList.push(location);
        }
        else{
            this.locationList.filter(r=>r.id !== location.id);
        }
        this.isAddLocation = false;
    }
    toAddLocation(){
        this.isAddLocation = true;
       
    }
    noDeleteCategory(){
        this.isDeleteCategory = false;
        this.title = Titles.CHECKED;
    }
    deleteCategory(){
        this.locationList = this.locationList.filter(r=>r.category.name !== this.checkCategory.name);
        this.categoryList = this.categoryList.filter(r=>r.name !== this.checkCategory.name);
        this.viewLocationList = [];
        this.checkCategory = new Category(null);
        this.isDeleteCategory = false;
        this.title = Titles.ALL;
        this.isShowCategoryName = false; 


    }
} 
