import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorShadesDetailsPageComponent } from './color-shades-home-page/color-shades-details-page/color-shades-details-page.component';
import { RedColorDetailsComponent } from './color-shades-home-page/red-color-details/red-color-details.component';
import { ColorShadesHomePageComponent } from './color-shades-home-page/color-shades-home-page.component';
import { PinkColorDetailsComponent } from './color-shades-home-page/pink-color-details/pink-color-details.component';
import { GreenColorDetailsComponent } from './color-shades-home-page/green-color-details/green-color-details.component';
import { CalculatorComponent } from './html-css-projects/calculator/calculator.component';
import { DigitalClockComponent } from './html-css-projects/digital-clock/digital-clock.component';
import { PageNotFoundComponent } from './static-component/page-not-found/page-not-found.component';

const routes: Routes = [
    {path:'', component:HomeComponentComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'box-shadow',component:BoxShadowComponent},
  {path:'color-picker', component:ColorPickerComponent},
  {path:'color-shades', component:ColorShadesHomePageComponent },
  {path:'red-color-shades', component:RedColorDetailsComponent},
  {path:'yellow-color-shades', component:ColorShadesDetailsPageComponent},
  {path:'pink-color-shades', component:PinkColorDetailsComponent},
  {path:'green-color-shades', component:GreenColorDetailsComponent},
  {path:'calculator', component:CalculatorComponent},
  {path:'digital-clock', component:DigitalClockComponent},
  {path:'**', component:PageNotFoundComponent}
];


@NgModule({

  imports: [  RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
