import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleModeComponent } from './simple-mode/simple-mode.component';
import { SequenceModeComponent } from './sequence-mode/sequence-mode.component';
import { LedPickerComponent } from './timeframe-editor/led-picker/led-picker.component';


const routes: Routes = [
  {path: 'simple', component: SimpleModeComponent},
  {path: 'sequence', component: SequenceModeComponent, children: [
      {path: "ledgrid", component: LedPickerComponent}
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
