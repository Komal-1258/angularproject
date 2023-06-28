import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
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
import { BlogseoComponent } from './pages/blogseo/blogseo.component';
import { BlogfinanceComponent } from './pages/blogfinance/blogfinance.component';
import { ImagesliderComponent } from './pages/imageslider/imageslider.component';
import { BlogcommonComponent } from './pages/blogcommon/blogcommon.component';
import { BlogdigitalComponent } from './pages/blogdigital/blogdigital.component';
import { BlogtipsComponent } from './pages/blogtips/blogtips.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'softwaredevelopment',component:SoftwaredevelopmentComponent},
  {path:'web',component:WebComponent},
  {path:'graphics', component:GraphicsComponent},
  {path:'ui',component:UIComponent},
  {path:'digital',component:DigitalComponent},
  {path:'blogui',component:BloguiComponent},
  {path:'blogbranding',component:BlogbrandingComponent},
  {path:'blogmobileapps',component:BlogmobileaapsComponent},
  {path:'blogwordpress',component:BlogwordpressComponent},
  {path:'blogsales',component:BlogsalesComponent},
  {path:'blogbusiness',component:BlogbusinessComponent},
  {path:'blogwebsite',component:BlogwebsiteComponent},
  {path:'blogcustom',component:BlogcustomComponent},
  {path:'blogit',component:BlogitComponent},
  {path:'blogadvantage',component:BlogadvantageComponent},
  {path:'sms',component:SmsComponent},
  {path:'blog2',component:Blog2Component},
  {path:'form',component:FormComponent},
  {path:'cardslider',component:CardsliderComponent},
  {path:'blogseo',component:BlogseoComponent},
  {path:'blogfinance',component:BlogfinanceComponent},
  {path:'imageslider',component:ImagesliderComponent},
  {path:'blogcommon',component:BlogcommonComponent},
  {path:'blogdigital',component:BlogdigitalComponent},
  {path:'blogtips',component:BlogtipsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
