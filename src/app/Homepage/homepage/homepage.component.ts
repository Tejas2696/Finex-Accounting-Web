import { Component, OnInit } from '@angular/core';
import { InquiryEntity } from 'src/app/api/models/inquiry-entity';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InquiryControllerService } from 'src/app/api/services/inquiry-controller.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

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
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+[0-9]$')
        ]
      ],
      inquiryMessage: ['']
    });
    return inquiryForm;
  }

  populateinquiryForm(): InquiryEntity {
    const inquiry: InquiryEntity = {};

    // Mandatory fields
    if (this.inquiryForm.get('name').dirty) {
      inquiry.name = this.inquiryForm.get('name').value.trim();
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
