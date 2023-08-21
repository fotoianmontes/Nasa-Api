import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  burgerMenu: boolean = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.burgerMenu = !this.burgerMenu;
    alert(this.burgerMenu);
  }
}
