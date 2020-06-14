import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SimpleModeComponent } from './simple-mode/simple-mode.component';
import { SetActiveDirective } from './set-active.directive';
import { HttpClientModule } from '@angular/common/http';
import { TurnOnBtnDirective } from './turn-on-btn.directive';
import { SequenceModeComponent } from './sequence-mode/sequence-mode.component';
import { TimeframeEditorComponent } from './timeframe-editor/timeframe-editor.component';
import {MatSliderModule} from '@angular/material/slider';
import { LedPickerComponent } from './timeframe-editor/led-picker/led-picker.component';

import {ColorPickerModule} from './colorpicker/colorpicker.module';






@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SimpleModeComponent,
    SetActiveDirective,
    TurnOnBtnDirective,
    SequenceModeComponent,
    TimeframeEditorComponent,
    LedPickerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatSliderModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
