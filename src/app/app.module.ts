import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './Contactus/contact-us/contact-us.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { ServicesComponent } from './Services/services/services.component';
import { SubServiceComponent } from './Services/Sub-services/sub-service/sub-service.component';
import { DataSecurityComponent } from './About-us/Data-security/data-security/data-security.component';
import { AboutusComponent } from './About-us/Data-security/aboutus/aboutus.component';
import { PricingComponent } from './About-us/pricing/pricing.component';
import { SubscriptionBoxComponent } from './Subscription-box/Subscription-box.component';
import { SpecialityComponent } from './Speciality/Speciality.component';
import { SubSpecialityComponent } from './Speciality/sub-speciality/sub-speciality.component';
import { SpecialityListComponent } from './Speciality/Speciality-list/Speciality-list.component';
import { ServiceListComponent } from './Services/services/service-list/service-list.component';
import { SoftwareComponent } from './software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ServiceListComponent,
    SubServiceComponent,
    DataSecurityComponent,
    AboutusComponent,
    PricingComponent,
    SubscriptionBoxComponent,
    SpecialityComponent,
    SubSpecialityComponent,
    SpecialityListComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
