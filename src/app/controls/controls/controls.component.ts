import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Control } from 'src/app/form-builder/interface';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Output() onDragStart : EventEmitter<Control> = new EventEmitter();

  public Controls: Control[] = [
    {
      type: 'text',
      label: 'Textbox',
    },
    {
      type: 'dropdown',
      label: 'Dropdown',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  dragStart(control: Control){
    this.onDragStart.emit(control);
  }

}
