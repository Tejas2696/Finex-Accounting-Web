import { Component, OnInit } from '@angular/core';
import { InquiryEntity } from '../api/models/inquiry-entity';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { InquiryControllerService } from '../api/services/inquiry-controller.service';

@Component({
  selector: 'app-Subscription-box',
  templateUrl: './Subscription-box.component.html',
  styleUrls: ['./Subscription-box.component.scss']
})
export class SubscriptionBoxComponent implements OnInit {

  inquiryForm: FormGroup;
  infoMessage = null;
  errorMessage = null;

  constructor(
    private fb: FormBuilder,
    private inquiryControllerService: InquiryControllerService
  ) { }

  ngOnInit() {
    this.inquiryForm = this.itializeinquiryForm();
  }

  itializeinquiryForm(): FormGroup {
    const inquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]+[0-9]$')
        ]
      ],
      inquiryMessage: [''],
      consent: ['', Validators.requiredTrue]
    });
    return inquiryForm;
  }

  populateinquiryForm(): InquiryEntity {
    const inquiry: InquiryEntity = {};

    // Mandatory fields
    if (this.inquiryForm.get('name').dirty) {
      inquiry.name = this.inquiryForm.get('name').value.trim();
    }

    if (this.inquiryForm.get('email').dirty) {
      inquiry.email = this.inquiryForm.get('email').value.trim();
    }

    if (this.inquiryForm.get('contactNumber').dirty) {
      inquiry.contactNumber = this.inquiryForm.get('contactNumber').value.trim();
    }

    if (this.inquiryForm.get('inquiryMessage').dirty) {
      inquiry.inquiryMessage = this.inquiryForm.get('inquiryMessage').value.trim();
    }

    return inquiry;
  }

  submitInquiryForm() {
    const inquiry: InquiryEntity = this.populateinquiryForm();

    console.log('inquiry', inquiry);

    this.inquiryControllerService
      .sendInquiryUsingPOST(inquiry)
      .subscribe(
        res => {
          if (res.error === false) {
            this.infoMessage = 'Thank You! We will contact you shortly…';
            this.inquiryForm.reset();
          } else {
            this.errorMessage = 'Oops! Something went wrong. Please try again later.';
          }
        },
        err => {
          this.errorMessage = 'Oops! Something went wrong. Please try again later.';
        }
      );
    setTimeout(() => {
      this.infoMessage = null;
      this.errorMessage = null;
    }, 8000);
  }

}
