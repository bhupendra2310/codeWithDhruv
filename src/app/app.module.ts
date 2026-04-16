import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ClipboardModule } from 'ngx-clipboard';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorShadesHomePageComponent } from './color-shades-home-page/color-shades-home-page.component';
import { ColorShadesDetailsPageComponent } from './color-shades-home-page/color-shades-details-page/color-shades-details-page.component';
import { RedColorDetailsComponent } from './color-shades-home-page/red-color-details/red-color-details.component';
import { PinkColorDetailsComponent } from './color-shades-home-page/pink-color-details/pink-color-details.component';
import { GreenColorDetailsComponent } from './color-shades-home-page/green-color-details/green-color-details.component';
import { CalculatorComponent } from './html-css-projects/calculator/calculator.component';
import { ToastrModule } from 'ngx-toastr';
import { DigitalClockComponent } from './html-css-projects/digital-clock/digital-clock.component';
import { PageNotFoundComponent } from './static-component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BoxShadowComponent,
    HomeComponentComponent,
    ColorPickerComponent,
    ColorShadesHomePageComponent,
    ColorShadesDetailsPageComponent,
    RedColorDetailsComponent,
    PinkColorDetailsComponent,
    GreenColorDetailsComponent,
    CalculatorComponent,
    DigitalClockComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
      BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
