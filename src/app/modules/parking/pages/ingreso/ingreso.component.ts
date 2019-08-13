import { Component, OnInit, TemplateRef } from '@angular/core';
import Vehicle from 'src/app/shared/models/vehicle.model';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addVehicle } from 'src/app/core/store/actions/ticket.actions';
import { TicketReducersType } from 'src/app/core/store/reducers/ticket.reducers';
import * as moment from 'moment';

type vehicleKeysType = keyof Vehicle;

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  tickets$: Observable<TicketReducersType>;
  modalRef: BsModalRef;
  vehicle: Vehicle;
  entryForm: FormGroup;
  vehicleType: vehicleKeysType[];
  constructor(private modalService: BsModalService, private store: Store<TicketReducersType> ) {
    this.tickets$ = store.pipe(select('tickets'));
  }

  ngOnInit(): void {
    this.vehicle = {
      brand: '',
      licencePlate: '',
      model: '',
      year: '',
      vehicleType: ''
    };
    this.vehicleType = Object.keys(this.vehicle) as vehicleKeysType[];
    this.buildForm();
  }

  buildForm() {
    let innerControl = {};
    this.vehicleType.forEach(key => {
      innerControl = {
        ...innerControl,
        [key]: new FormControl(this.vehicle[key])
      };
    });
    this.entryForm = new FormGroup(innerControl);
  }

  showModal(template: TemplateRef<any>): void {
    this.buildForm();
    this.modalRef = this.modalService.show(template);

  }
  addVehicle() {
    this.vehicleType.forEach(key => {
      this.vehicle[key] = this.entryForm.get(key).value;
    });
    this.store.dispatch(addVehicle({ vehicle: this.vehicle }));
    this.modalRef.hide();
  }

  formatDate(date: Date): string {
    return moment(date).locale('ES').format('LLL');
  }

}
