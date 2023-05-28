import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  bookingForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    mobile: ['']
  });

  constructor(
    private aptService: ProductService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {}

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createProduct(this.bookingForm.value).then((res: any) => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
      .catch((error: any) => console.log(error));
    }
  }
}