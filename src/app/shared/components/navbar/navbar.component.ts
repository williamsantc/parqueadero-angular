import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getVehicles} from 'src/app/core/store/selectors/tickets.selectors';
import {ParkingState} from '../../../core/store/reducers';
import Ticket from '../../models/ticket.model';

@Component({
  selector: 'app-parking-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public tickets$: Observable<Ticket[]>;
  constructor(private router: Router, private store: Store<ParkingState> ) {
    this.tickets$ = store.pipe(select(getVehicles));
   }

  public navigate(url: string) {
    this.router.navigate([url]);
  }

}
