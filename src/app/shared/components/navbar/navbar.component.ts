import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  public navigate(url: string) {
    this.router.navigate([url]);
  }

}
