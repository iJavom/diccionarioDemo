import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PalabrasComponent } from './palabras/palabras.component';

const routes: Routes = [

  {path: '', component: MainComponent, children:[
    {path: 'home', component:HomeComponent},
    {path: 'palabras', component:PalabrasComponent},
    {path: 'crear/:variable', component:CrearComponent},
    {path: 'crear', component:CrearComponent}
  ]},
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
