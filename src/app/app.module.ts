import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './section/header/header.component';
import { CoverComponent } from './section/cover/cover.component';
import { IndicatorsComponent } from './section/indicators/indicators.component';
import { AboutProductComponent } from './section/about/about.component';
import { CardProductComponent } from './card/product/card-product.component';
import { ModalSelectionComponent } from './modal/selection/modal-selection.component';
import { CardSelectionComponent } from './card/selection/card-selection.component';
import { FormsModule } from '@angular/forms';
import { ModalAppreciationComponent } from './modal/appreciation/appreciation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CoverComponent,
    IndicatorsComponent,
    AboutProductComponent,
    CardProductComponent,
    ModalSelectionComponent,
    CardSelectionComponent,
    ModalAppreciationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
