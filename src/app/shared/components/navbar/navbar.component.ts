import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { StateType } from 'src/app/core/store/reducers';
import { Observable } from 'rxjs';
import Ticket from '../../models/ticket.model';
import { getVehicles } from 'src/app/core/store/selectors/tickets.selectors';

@Component({
  selector: 'app-parking-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public tickets$: Observable<Ticket[]>;
  constructor(private router: Router, private store: Store<StateType> ) {
    this.tickets$ = store.pipe(select(getVehicles));
   }

  public navigate(url: string) {
    this.router.navigate([url]);
  }

}
