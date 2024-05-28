import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DeliveryComponent } from './delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
