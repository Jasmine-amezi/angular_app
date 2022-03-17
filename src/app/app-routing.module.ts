import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JayComponent } from './jay/jay.component';


const routes: Routes = [
  {path:'jay', component:JayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
