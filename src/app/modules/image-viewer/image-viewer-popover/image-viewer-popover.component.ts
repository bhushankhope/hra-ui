import { Component } from '@angular/core';

@Component({
  selector: 'ccf-image-viewer-popover',
  templateUrl: './image-viewer-popover.component.html',
  styleUrls: ['./image-viewer-popover.component.scss']
})
export class ImageViewerPopoverComponent {

  contentsVisible = false;

  toggleContentVisible(): void {
    this.contentsVisible = !this.contentsVisible;
  }

  closeViewer(): void {
    this.contentsVisible = false;
  }

}
