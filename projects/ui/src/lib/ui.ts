import { Component, NgModule } from '@angular/core';
import { Button } from './components/button/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class Ui {}
