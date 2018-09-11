import { Directive, Output, HostListener } from '@angular/core';
import { EventEmitter } from 'events';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  ondragover($event) {
    $event.preventDefault();
    this.hovered.emit(true);
    console.log('hovering');
  }

}
