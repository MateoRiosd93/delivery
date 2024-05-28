import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../services/delivery.service';
import { Delivery } from '../models/delivery';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  delivery: Delivery | null = null

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.handlerDelivery();
  }

  handlerDelivery() {
    this.deliveryService.delivery.subscribe({
      next: delivery => this.delivery = delivery,
      error: console.log,
    });
  }

}
