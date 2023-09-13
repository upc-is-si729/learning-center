import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {StudentsService} from "./learning/services/students.service";
import {StudentsComponent} from './learning/pages/students/students.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [AppComponent, StudentsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatDividerModule],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
