import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewChild } from '@angular/core';
import { MatVideoModule } from 'mat-video';
import {MatCardModule} from '@angular/material/card';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FAQsComponent } from './faqs/faqs.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HOMEComponent } from './home/home.component';

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

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule,


 MatListModule,
    MatGridListModule,
    MatDividerModule,

    
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
