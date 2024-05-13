import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutComponent } from './Pages/about/about.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "cart",
        component: CartComponent
    },
    {
        path: "about",
        component: AboutComponent
    }
];
