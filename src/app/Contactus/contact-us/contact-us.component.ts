import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InquiryEntity } from 'src/app/api/models/inquiry-entity';
import { InquiryControllerService } from 'src/app/api/services/inquiry-controller.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;
  requestACallBackForm: FormGroup;
  infoMessage = null;
  errorMessage = null;

  requestACallBackInfoMessage = null;
  requestACallBackErrorMessage = null;

  constructor(
    private fb: FormBuilder,
    private inquiryControllerService: InquiryControllerService
  ) { }

  ngOnInit() {
    this.contactUsForm = this.initializeContactUsForm();
    this.requestACallBackForm = this.initializeRequestACallBackForm();
  }

  initializeContactUsForm(): FormGroup {
    const contactUsForm = this.fb.group({
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
          Validators.maxLength(10),
          Validators.pattern('^[0-9]+[0-9]$')
        ]
      ],
      organizationName: [''],
      inquiryMessage: ['']
    });
    return contactUsForm;
  }

  populateContactUsForm(): InquiryEntity {
    const contactUsInquiry: InquiryEntity = {};

    // Mandatory fields
    if (this.contactUsForm.get('name').dirty) {
      contactUsInquiry.name = this.contactUsForm.get('name').value.trim();
    }

    if (this.contactUsForm.get('email').dirty) {
      contactUsInquiry.email = this.contactUsForm.get('email').value.trim();
    }

    if (this.contactUsForm.get('contactNumber').dirty) {
      contactUsInquiry.contactNumber = this.contactUsForm.get('contactNumber').value.trim();
    }

    if (this.contactUsForm.get('organizationName').dirty) {
      contactUsInquiry.organizationName = this.contactUsForm.get('organizationName').value.trim();
    }

    if (this.contactUsForm.get('inquiryMessage').dirty) {
      contactUsInquiry.inquiryMessage = this.contactUsForm.get('inquiryMessage').value.trim();
    }

    return contactUsInquiry;
  }

  submitContactUs() {
    const inquiry: InquiryEntity = this.populateContactUsForm();

    console.log('inquiry', inquiry);

    this.inquiryControllerService
      .sendInquiryUsingPOST(inquiry)
      .subscribe(
        res => {
          if (res.error === false) {
            this.infoMessage = 'Thank You! We will contact you shortly…';
            this.contactUsForm.reset();
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

  initializeRequestACallBackForm(): FormGroup {
    const requestACallBackForm = this.fb.group({
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
      serviceType: ['']
    });
    return requestACallBackForm;
  }

  populateRequestACallBackForm(): InquiryEntity {
    const requestACallbackinquiry: InquiryEntity = {};

    // Mandatory fields
    if (this.requestACallBackForm.get('name').dirty) {
      requestACallbackinquiry.name = this.requestACallBackForm.get('name').value.trim();
    }

    if (this.requestACallBackForm.get('contactNumber').dirty) {
      requestACallbackinquiry.contactNumber = this.requestACallBackForm.get('contactNumber').value.trim();
    }

    if (this.requestACallBackForm.get('serviceType').dirty) {
      requestACallbackinquiry.serviceType = this.requestACallBackForm.get('serviceType').value.trim();
    }

    return requestACallbackinquiry;
  }

  submitRequestACallback() {
    const inquiry: InquiryEntity = this.populateRequestACallBackForm();

    console.log('inquiry', inquiry);

    this.inquiryControllerService
      .sendInquiryUsingPOST(inquiry)
      .subscribe(
        res => {
          if (res.error === false) {
            this.requestACallBackInfoMessage = 'Thank You! We will contact you shortly…';
            this.requestACallBackForm.get('name').patchValue('');
            this.requestACallBackForm.get('contactNumber').patchValue('');
          } else {
            this.requestACallBackErrorMessage = 'Oops! Something went wrong. Please try again later.';
          }
        },
        err => {
          this.requestACallBackErrorMessage = 'Oops! Something went wrong. Please try again later.';
        }
      );
    setTimeout(() => {
      this.requestACallBackInfoMessage = null;
      this.requestACallBackErrorMessage = null;
    }, 8000);
  }

}
