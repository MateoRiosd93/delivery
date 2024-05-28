import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departament } from '../models/departament';
import { City } from '../models/city';
import { Delivery, INITIAL_DELIVERY } from '../models/delivery';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private urlBase = environment.urlBase;

  delivery: BehaviorSubject<Delivery> = new BehaviorSubject<Delivery>(INITIAL_DELIVERY)

  constructor(private http: HttpClient) {}

  getDepartaments(): Observable<Departament[]> {
    return this.http.get<Departament[]>(`${this.urlBase}/Department`);
  }

  getCitiesForDepartament(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.urlBase}/Department/${id}/cities`);
  }
}
