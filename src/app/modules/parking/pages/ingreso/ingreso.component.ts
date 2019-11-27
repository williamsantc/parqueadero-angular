import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { addVehicle } from 'src/app/core/store/actions/ticket.actions';
import { getVehicles } from 'src/app/core/store/selectors/tickets.selectors';
import Ticket from 'src/app/shared/models/ticket.model';
import Vehicle, { vehicleTypes } from 'src/app/shared/models/vehicle.model';
import {ParkingState} from '../../../../core/store/reducers';

type vehicleKeysType = keyof Vehicle;

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss'],
})
export class IngresoComponent implements OnInit {
  tickets$: Observable<Ticket[]>;
  modalRef: BsModalRef;
  vehicle: Vehicle;
  entryForm: FormGroup;
  vehicleKeys: vehicleKeysType[];
  vehicleTypes = Object.values(vehicleTypes);
  constructor(private modalService: BsModalService, private store: Store<ParkingState> ) {
    this.tickets$ = store.pipe(select(getVehicles));
  }

  ngOnInit(): void {
    this.vehicle = {
      brand: '',
      licencePlate: '',
      model: '',
      year: '',
      vehicleType: '',
    };
    this.vehicleKeys = Object.keys(this.vehicle) as vehicleKeysType[];
    this.buildForm();
  }

  buildForm() {
    let innerControl = {};
    this.vehicleKeys.forEach((key) => {
      innerControl = {
        ...innerControl,
        [key]: new FormControl(this.vehicle[key]),
      };
    });
    this.entryForm = new FormGroup(innerControl);
  }

  showModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);

  }
  addVehicle() {
    this.vehicleKeys.forEach((key) => {
      this.vehicle[key] = this.entryForm.get(key).value;
    });
    this.store.dispatch(addVehicle({ vehicle: this.vehicle }));
    this.modalRef.hide();
    this.entryForm.reset();
  }

  formatDate(date: Date): string {
    return moment(date).locale('ES').format('LLL');
  }

}
