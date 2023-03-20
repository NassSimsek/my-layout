import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { LoginComponent } from "./components/login/login.component";

const routes:Routes=[
    {             
        path:"",   // adres çubuğu boş ise layoutvomp html i gelsinm
        component:LayoutsComponent,
        children:[ // diğer compun html lerini layouıt içnde açanilmek için children att kullanılır.attribute elemanları nesne olan bir dizi alır 
            {
                path:"",  
                component:HomeComponent,
            },
            {
                path:"home",  
                component:HomeComponent,
            },
            {
                path:"about",  
                component:AboutComponent,
            },
            {
                path:"contact",  
                component:ContactComponent,
            },
            {
                path:"login",  
                component:LoginComponent,
            }
        ]
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class AppRoutingModule{}