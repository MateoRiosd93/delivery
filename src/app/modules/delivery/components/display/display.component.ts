import { Component, Input } from '@angular/core';
import { Delivery } from '../../models/delivery';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input() delivery: Delivery | null = null

}
