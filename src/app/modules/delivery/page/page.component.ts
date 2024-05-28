import { Component, OnInit } from '@angular/core';
import { Delivery, INITIAL_DELIVERY } from '../models/delivery';
import { DeliveryService } from '../services/delivery.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  // TODO: Revisar el tipado.
  delivery: any

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.handlerDelivery();
  }

  handlerDelivery() {
    this.deliveryService.delivery.subscribe({
      next: (delivery) => {
        this.delivery = delivery
        console.log(delivery);
      },
      error: console.log,
    });
  }

}
