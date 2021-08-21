import { Component, OnInit } from '@angular/core';
import { Control } from '../interface';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {

  public addedControls: Control[] = [];
  public draggedControl: Control | null = null;
  public displayPreview: boolean = false;
  public prevCount = {
    text: 0,
    dropDown: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  dragStart(control: Control){
    this.draggedControl = {...control};
  }

  dropSuccess(status: any){
    if(status && this.draggedControl){
      if(this.draggedControl.type === 'text'){
        this.draggedControl.name = `Textbox ${this.prevCount.text + 1}`;
        this.prevCount.text += 1;
      }else if(this.draggedControl.type === 'dropdown'){
        this.draggedControl.name = `Dropdown ${this.prevCount.dropDown + 1}`;
        this.prevCount.dropDown += 1;
      }
      this.addedControls.unshift(this.draggedControl as Control);
    }
  }

  closePreview(){
    this.displayPreview = false;
  }

  removeAddedControl(name: string | null | undefined){
    this.addedControls = this.addedControls.filter(({name:controlName}) => controlName !== name);
  }

}
