import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternsComponent } from './trimble-interns/add-interns/add-interns.component';
import { HomeComponent } from './trimble-interns/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch:"full" },
  { path: "add-interns", component: AddInternsComponent},
  // { path: "edit-note/:id", component: EditNoteComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
