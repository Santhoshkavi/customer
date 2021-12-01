import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component';
import { InsertComponent } from './insert/insert.component';
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    EditComponent,
    RemoveComponent,
    InsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
