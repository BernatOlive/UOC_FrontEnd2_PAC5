import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentDetailComponent } from './components/component-detail/component-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'image/:id', component: ComponentDetailComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
