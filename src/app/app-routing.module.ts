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
import {BoxRadiusGeneratorPageComponent} from "./box-radius-generator-page/box-radius-generator-page.component";
import {CssButtonGeneratorPageComponent} from "./css-button-generator-page/css-button-generator-page.component";
import {JsonFormattorToolComponent} from "./tools/json-formattor-tool/json-formattor-tool.component";
import {ToolsHomePageComponent} from "./tools/tools-home-page/tools-home-page.component";
import {AboutUsComponent} from "./static-component/about-us/about-us.component";
import {ProjectsHomePageComponent} from "./projects/projects-home-page/projects-home-page.component";
import {ContentLayoutComponent} from "./static-component/content-layout/content-layout.component";
import {PrivacyPoliciesComponent} from "./static-component/privacy-policies/privacy-policies.component";
import {TermsConditionsComponent} from "./static-component/terms-conditions/terms-conditions.component";

const routes: Routes = [
  //   {path:'', component:HomeComponentComponent},
  // {path:'navbar', component:NavbarComponent},
  // {path:'about', component:AboutUsComponent},
  // {path:'footer',component:FooterComponent},
  // {path:'box-shadow',component:BoxShadowComponent},
  // {path:'box-radius-generator', component:BoxRadiusGeneratorPageComponent},
  // {path:'css-button-generator', component:CssButtonGeneratorPageComponent},
  // {path:'color-picker', component:ColorPickerComponent},
  // {path:'color-shades', component:ColorShadesHomePageComponent },
  // {path:'red-color-shades', component:RedColorDetailsComponent},
  // {path:'yellow-color-shades', component:ColorShadesDetailsPageComponent},
  // {path:'pink-color-shades', component:PinkColorDetailsComponent},
  // {path:'green-color-shades', component:GreenColorDetailsComponent},
  // {path:'calculator', component:CalculatorComponent},
  // {path:'digital-clock', component:DigitalClockComponent},
  // {path:'tools/json-formator', component:JsonFormattorToolComponent},
  // {path:'tools', component: ToolsHomePageComponent},
  // {path:'projects', component:ProjectsHomePageComponent},
  // {path:'**', component:PageNotFoundComponent}



  {
    path:'',
    component: ContentLayoutComponent,
    children: [

      { path:'', component: HomeComponentComponent },

      { path:'navbar', component: NavbarComponent },
      { path:'about', component: AboutUsComponent },
      { path:'footer', component: FooterComponent },

      { path:'box-shadow', component: BoxShadowComponent },
      { path:'box-radius-generator', component: BoxRadiusGeneratorPageComponent },
      { path:'css-button-generator', component: CssButtonGeneratorPageComponent },

      { path:'color-picker', component: ColorPickerComponent },
      { path:'color-shades', component: ColorShadesHomePageComponent },

      { path:'red-color-shades', component: RedColorDetailsComponent },
      { path:'yellow-color-shades', component: ColorShadesDetailsPageComponent },
      { path:'pink-color-shades', component: PinkColorDetailsComponent },
      { path:'green-color-shades', component: GreenColorDetailsComponent },

      { path:'calculator', component: CalculatorComponent },
      { path:'digital-clock', component: DigitalClockComponent },

      { path:'tools/json-formator', component: JsonFormattorToolComponent },
      { path:'tools', component: ToolsHomePageComponent },
      { path:'projects', component: ProjectsHomePageComponent },
      {path:'privacy-policy', component:PrivacyPoliciesComponent},
      {path:'terms-conditions', component: TermsConditionsComponent},

    ]
  },

// Layout ke bahar (No Navbar/Footer)
  { path:'**', component: PageNotFoundComponent }

];


@NgModule({

  imports: [  RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling:'enabled',
  })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
