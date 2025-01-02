import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOption: string = '';

  onOption(menuOption: string) {
    this.menuOption = menuOption;
  }
}
