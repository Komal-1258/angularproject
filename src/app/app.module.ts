import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SoftwaredevelopmentComponent } from './pages/softwaredevelopment/softwaredevelopment.component';
import { WebComponent } from './pages/web/web.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { UIComponent } from './pages/ui/ui.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { BloguiComponent } from './pages/blogui/blogui.component';
import { BlogbrandingComponent } from './pages/blogbranding/blogbranding.component';
import { BlogmobileaapsComponent } from './pages/blogmobileaaps/blogmobileaaps.component';
import { BlogwordpressComponent } from './pages/blogwordpress/blogwordpress.component';
import { BlogsalesComponent } from './pages/blogsales/blogsales.component';
import { BlogbusinessComponent } from './pages/blogbusiness/blogbusiness.component';
import { BlogwebsiteComponent } from './pages/blogwebsite/blogwebsite.component';
import { BlogcustomComponent } from './pages/blogcustom/blogcustom.component';
import { BlogitComponent } from './pages/blogit/blogit.component';
import { BlogadvantageComponent } from './pages/blogadvantage/blogadvantage.component';
import { SmsComponent } from './pages/sms/sms.component';
import { Blog2Component } from './pages/blog2/blog2.component';
import { FormComponent } from './pages/form/form.component';
import { CardsliderComponent } from './pages/cardslider/cardslider.component';
import { ImagesliderComponent } from './pages/imageslider/imageslider.component';
import { BlogseoComponent } from './pages/blogseo/blogseo.component';
import { BlogfinanceComponent } from './pages/blogfinance/blogfinance.component';
import { ConnectComponent } from './sharepage/connect/connect.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    SoftwaredevelopmentComponent,
    WebComponent,
    GraphicsComponent,
    UIComponent,
    DigitalComponent,
    BloguiComponent,
    BlogbrandingComponent,
    BlogmobileaapsComponent,
    BlogwordpressComponent,
    BlogsalesComponent,
    BlogbusinessComponent,
    BlogwebsiteComponent,
    BlogcustomComponent,
    BlogitComponent,
    BlogadvantageComponent,
    SmsComponent,
    Blog2Component,
    FormComponent,
    CardsliderComponent,
    ImagesliderComponent,
    BlogseoComponent,
    BlogfinanceComponent,
    ConnectComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
