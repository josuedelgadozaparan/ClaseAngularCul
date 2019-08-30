import { NgModule, Component } from "@angular/core";
import {Routes,RouterModule, Router } from "@angular/router" 
import { LoginComponent } from './login/login.component';

export const routes:Routes=[{
    path:'login',
    component:LoginComponent
}]

@NgModule({

    imports:[ RouterModule.forRoot(routes,{useHash: true}) ],
    exports:[  RouterModule ],    
    providers:[   ]
    


})

export class AppRotingModule{}


