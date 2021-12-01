import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { RemoveComponent } from './remove/remove.component';

import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  // it use to navigate the one page to another page
  {path:"details",component:DetailsComponent},
  {path:"edit",component:EditComponent},
  {path:"remove",component:RemoveComponent},
  {path:"insert",component:InsertComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
