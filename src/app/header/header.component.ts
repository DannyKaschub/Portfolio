import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  showMenu = false;

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  closeMenu(){
    this.showMenu = false;
  }
}
