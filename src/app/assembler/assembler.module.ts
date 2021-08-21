import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblerComponent } from './assembler/assembler.component';



@NgModule({
  declarations: [
    AssemblerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AssemblerComponent
  ]
})
export class AssemblerModule { }
