import { Component, Input, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  delivery: any = undefined

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.deliveryService.delivery.subscribe({
      next: (delivery) => (this.delivery = delivery),
    });
  }

  
}
