import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() priority: '!' | '!!' | '!!!' = '!';
  @Output() priorityChanged = new EventEmitter();

  constructor() { }

  changed(event) {
    console.log(event.target.defaultValue);
    this.priority = event.target.defaultValue;
    this.priorityChanged.emit(this.priority);
  }

  ngOnInit() {
  }

}
