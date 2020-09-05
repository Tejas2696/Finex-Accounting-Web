import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './Contactus/contact-us/contact-us.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { ServicesComponent } from './Services/services/services.component';
import { SubServiceComponent } from './Services/Sub-services/sub-service/sub-service.component';
import { DataSecurityComponent } from './About-us/Data-security/data-security/data-security.component';
import { PricingComponent } from './About-us/pricing/pricing.component';
import { SpecialityComponent } from './Speciality/Speciality.component';
import { SubSpecialityComponent } from './Speciality/sub-speciality/sub-speciality.component';
import { AboutusComponent } from './About-us/aboutus/aboutus.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'services/:serviceName',
    component: SubServiceComponent
  },
  {
    path: 'about-us/data-security',
    component: DataSecurityComponent
  },
  {
    path: 'about-us/who-we-are',
    component: AboutusComponent
  },
  {
    path: 'about-us/pricing',
    component: PricingComponent
  },
  {
    path: 'specialities',
    component: SpecialityComponent
  },
  {
    path: 'specialities/:specialityName',
    component: SubSpecialityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
