import { Component, OnInit } from '@angular/core';
import { SERVICES_CONTENT } from '../../../page-data/services-content';
import { ContentEntity } from 'src/app/api/models/content-entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-service',
  templateUrl: './sub-service.component.html',
  styleUrls: ['./sub-service.component.scss']
})
export class SubServiceComponent implements OnInit {
  serviceName: any;

  constructor(public route: ActivatedRoute) { }

  serviceContent: ContentEntity;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceName = params.serviceName;
      console.log(this.serviceName);

      switch (this.serviceName) {
        case 'book-keping': {
          this.serviceContent = SERVICES_CONTENT.bookKeping;
          break;
        }
        case 'VAT': {
          this.serviceContent = SERVICES_CONTENT.VAT;
          break;
        }
        case 'management-account': {
          this.serviceContent = SERVICES_CONTENT.managementAccounts;
          break;
        }
        case 'year-end-accounts&CT-returns': {
          this.serviceContent = SERVICES_CONTENT.yearEndAccountsAndCTReturns;
          break;
        }
        case 'self-assesment-tax-returns': {
          this.serviceContent = SERVICES_CONTENT.selfAssessmentTaxReturns;
          break;
        }
        case 'company-secretarial': {
          this.serviceContent = SERVICES_CONTENT.companySecretarial;
          break;
        }
      }
      console.log(this.serviceContent);
    });

  }

}
