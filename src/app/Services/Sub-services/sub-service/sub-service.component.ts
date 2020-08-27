import { Component, OnInit } from '@angular/core';
import { SERVICES_CONTENT } from '../../../page-data/services-content';
import { ServiceContentEntity } from 'src/app/api/models/service-content-entity';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-service',
  templateUrl: './sub-service.component.html',
  styleUrls: ['./sub-service.component.scss']
})
export class SubServiceComponent implements OnInit {
  serviceName: any;

  constructor(public route: ActivatedRoute) { }

  serviceContent: ServiceContentEntity;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.serviceName = params.serviceName;
      console.log(this.serviceName);

      switch (this.serviceName) {
        case 'VAT': {
          this.serviceContent = SERVICES_CONTENT.VAT;
          break;
        }
        case 'book-keping': {
          this.serviceContent = SERVICES_CONTENT.bookKeping;
          break;
        }
      }

      console.log(this.serviceContent);
    });

  }

}
