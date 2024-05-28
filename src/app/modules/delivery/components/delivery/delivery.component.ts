import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryService } from '../../services/delivery.service';
import { Departament } from '../../models/departament';
import { City } from '../../models/city';
import { Delivery } from '../../models/delivery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  departaments: Departament[] = [];
  cities: City[] = [];

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    departament: new FormControl(null, Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private deliveryService: DeliveryService, private router: Router) {}

  ngOnInit(): void {
    this.getDepartaments();
  }

  getDepartaments() {
    this.deliveryService.getDepartaments().subscribe({
      next: departaments => this.departaments = departaments,
      error: console.log,
    });
  }

  getCitiesForDepartament(){
    const { id } = this.form.get('departament')?.value;

    if(!id) return

    this.deliveryService.getCitiesForDepartament(id).subscribe({
      next: cities => this.cities = cities,
      error: console.log
    })
  }

  saveDelivery() {
    if(!this.form.valid){
      alert("Aun no es valido el formulario, verifique y guarde nuevamente")
      return
    }

    const { name, departament, city, address } = this.form.value;
    const { name: departamentName } = departament
    
    const delivery: Delivery = {
      name,
      departament: departamentName,
      city,
      address
    }

    this.deliveryService.delivery.next(delivery)
    this.form.reset()
    this.router.navigate(["delivery/fechaentrega"])
  }
}
