import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ColorPickerComponent } from './colorpicker.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component'
import { ColorService } from './color.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorPickerComponent, ColorSliderComponent, ColorPaletteComponent],
  exports: [ColorPickerComponent],

})
export class ColorPickerModule {}