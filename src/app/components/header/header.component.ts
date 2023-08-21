import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  burgerMenu: boolean = false;
  ulStatus: boolean = false;

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async toggleMenu(event: Event) {
    event.stopPropagation();

    if (this.ulStatus) {
      this.burgerMenu = !this.burgerMenu;
      await this.sleep(300);
      this.ulStatus = !this.ulStatus;
    } else {
      this.burgerMenu = !this.burgerMenu;
      this.ulStatus = !this.ulStatus;
    }
  }
}
