import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Control } from 'src/app/form-builder/interface';

@Component({
  selector: 'app-assembler',
  templateUrl: './assembler.component.html',
  styleUrls: ['./assembler.component.scss']
})
export class AssemblerComponent implements OnInit {

  @Input() addedControls: Control[] = [];
  @Output() onDropSuccess : EventEmitter<boolean> = new EventEmitter();
  @Output() onRemoveAddedControl : EventEmitter<string | null | undefined> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: any){
    this.onDropSuccess.emit(true);
  }

  allowDrop(event: any){
    event.preventDefault();
  }

  remove(name: string | null | undefined){
    this.onRemoveAddedControl.emit(name);
  }
}
