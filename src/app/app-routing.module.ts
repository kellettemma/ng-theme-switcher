import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  { path: 'design', component: DesignComponent },
  { path: 'code', component: CodeComponent },
  { path: '', redirectTo: '/design', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
