import { Component } from '@angular/core';
import { items } from './items';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent {
    items: Array<String>;
    navbarItems = items
}