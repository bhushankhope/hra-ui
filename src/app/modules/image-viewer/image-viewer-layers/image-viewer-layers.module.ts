import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ImageViewerLayersComponent } from './image-viewer-layers.component';
import { ColorPickerLauncherModule } from '../color-picker-launcher/color-picker-launcher.module';


@NgModule({
  imports: [CommonModule, MatCheckboxModule, ColorPickerLauncherModule],
  declarations: [ImageViewerLayersComponent],
  exports: [ImageViewerLayersComponent]
})
export class ImageViewerLayersModule { }
