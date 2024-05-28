import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DeliveryDateComponent } from './delivery-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DeliveryDateComponent', () => {
  let component: DeliveryDateComponent;
  let fixture: ComponentFixture<DeliveryDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryDateComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(DeliveryDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
