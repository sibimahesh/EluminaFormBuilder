import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from '../controls/controls.module';
import { AssemblerModule } from '../assembler/assembler.module';
import { PreviewModule } from '../preview/preview.module';
import { RendererModule } from '../renderer/renderer.module';
import { RendererComponent } from '../renderer/renderer/renderer.component';
import { AssemblerComponent } from '../assembler/assembler/assembler.component';
import { ControlsComponent } from '../controls/controls/controls.component';
import { PreviewComponent } from '../preview/preview/preview.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';



@NgModule({
  declarations: [
    FormBuilderComponent
  ],
  imports: [
    CommonModule,
    ControlsModule,
    AssemblerModule,
    PreviewModule,
    RendererModule
  ]
})
export class FormBuilderModule { }
