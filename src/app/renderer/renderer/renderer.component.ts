import { Component, Input, OnInit } from '@angular/core';
import { Control } from 'src/app/form-builder/interface';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {

  @Input() addedControls: Control[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
