import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { DetalisComponent } from './components/detalis/detalis.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {path: 'addProduct', component: AddProductComponent},
    {
        path: 'about',
        component: AboutUsComponent,
        children: [
            {path:'' , redirectTo: 'vision',pathMatch:'full'},           
            { path: 'vision', component: VisionComponent },
            { path: 'values', component: ValuesComponent },
        ]
    },
    { path: 'order', component: OrderComponent,canActivate:[authGuard] },
    { path:'details/:id', component:DetalisComponent},
    { path: '**',  component: NotFoundComponent }
];
