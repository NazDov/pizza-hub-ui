import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/menu-item.model';
import { ProductCartService } from '../service/product-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  name: string = "Pizza Hub";
  menuItems: NavItem[] = []

  constructor(private cartService: ProductCartService) {}

  ngOnInit() {
    this.configureNavItems();
  }

  private configureNavItems() {
    let homeNav = new NavItem()
    homeNav.name = "Home";
    homeNav.link = "";

    let menuNav = new NavItem();
    menuNav.name = "Menu";
    menuNav.link = "/menu";

    let contactsNav = new NavItem();
    contactsNav.name = "Contacts";
    contactsNav.link = "";

    this.menuItems.push(homeNav);
    this.menuItems.push(menuNav);
    this.menuItems.push(contactsNav);
  }

  getCount(): number {
    return this.cartService.getCount();
  }

}
