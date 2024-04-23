import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProductsComponent } from "./components/products/products.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OrderComponent } from "./components/order/order.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, FooterComponent, OrderComponent , RouterOutlet]
})
export class AppComponent {
  title = 'ecommerceApp';
}
