import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../../services/delivery.service';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.css'],
})
export class DeliveryDateComponent implements OnInit {
  delivery: Delivery = {} as Delivery;

  form: FormGroup = new FormGroup({
    deliveryDate: new FormControl('', Validators.required),
  });

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.handlerDelivery();
  }

  handlerDelivery() {
    this.deliveryService.delivery.subscribe({
      next: (delivery) => (this.delivery = delivery),
    });
  }

  addDeliveryDate() {
    if (!this.form) {
      alert('Debes agregar una fecha de entrega para tu delivery');
      return;
    }

    const { deliveryDate } = this.form.value;

    const delivery: Delivery = { ...this.delivery, deliveryDate };
    this.deliveryService.delivery.next(delivery);
    this.form.reset();
  }
}
