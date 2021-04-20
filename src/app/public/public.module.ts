import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { CovidComponent } from './covid/covid.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PisiComponent } from './pisi/pisi.component';
import { SofiComponent } from './sofi/sofi.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'pisi',
        component: PisiComponent
      },
      {
        path: 'sofi',
        component: SofiComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'career',
        component: CareerComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'covid',
        component: CovidComponent
      },
      {
        path: 'privacy',
        component: PrivacyComponent
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [PublicComponent, CovidComponent, PrivacyComponent, TermsConditionsComponent, CareerComponent, AboutUsComponent, BlogComponent, ContactUsComponent, HomeComponent, PisiComponent, SofiComponent, MainNavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class PublicModule { }
