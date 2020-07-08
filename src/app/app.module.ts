import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { CategoryDesktop } from './categoryDesktop.component';
import { EditCategoryForm } from './editCategoryForm.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    CategoryDesktop,
    EditCategoryForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CategoryDesktop]
})
export class AppModule { }
