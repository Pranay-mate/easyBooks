import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewChild } from '@angular/core';
import { MatVideoModule } from 'mat-video';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FAQsComponent } from './faqs/faqs.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HOMEComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { ServicesComponent } from './home/services/services.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { PlansComponent } from './home/plans/plans.component';
import { MessageToParentComponent } from './home/message-to-parent/message-to-parent.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HappyCustomersComponent } from './home/happy-customers/happy-customers.component';
import { WhatsappUsComponent } from './whatsapp-us/whatsapp-us.component';


@NgModule({
  declarations: [
    AppComponent,
    FAQsComponent,
    HOMEComponent,
    HowItWorksComponent,
    ServicesComponent,
    ReviewsComponent,
    PlansComponent,
    MessageToParentComponent,
    HeaderComponent,
    FooterComponent,
    HappyCustomersComponent,
    WhatsappUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatCardModule,
    NgbModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
