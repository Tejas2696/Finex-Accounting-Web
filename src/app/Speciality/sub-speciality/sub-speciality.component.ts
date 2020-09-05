import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentEntity } from 'src/app/api/models/content-entity';
import { SPECIALITY_CONTENT } from '../../page-data/speciality-content';

@Component({
  selector: 'app-sub-speciality',
  templateUrl: './sub-speciality.component.html',
  styleUrls: ['./sub-speciality.component.scss']
})
export class SubSpecialityComponent implements OnInit {
  specialityName: any;

  constructor(public route: ActivatedRoute) { }

  specialityContent: ContentEntity;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.specialityName = params.specialityName;
      console.log(this.specialityName);

      switch (this.specialityName) {
        case 'solicitor-accounting': {
          this.specialityContent = SPECIALITY_CONTENT.solicitorAccounting;
          break;
        }
        case 'music-industry-accounting': {
          this.specialityContent = SPECIALITY_CONTENT.musicIndustryAccounting;
          break;
        }
        case 'contractor-accounting': {
          this.specialityContent = SPECIALITY_CONTENT.contractorAccounting;
          break;
        }
        case 'restaurant-accounting': {
          this.specialityContent = SPECIALITY_CONTENT.restaurantAccounting;
          break;
        }
        case 'pub-accounting': {
          this.specialityContent = SPECIALITY_CONTENT.pubAccounting;
          break;
        }
      }
      console.log(this.specialityContent);
    });

  }

}
