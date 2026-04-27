import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table<T = any> {
  @Input() columns: { key: keyof T; label: string }[] = [];
  @Input() data: T[] = [];
  @Input() variant: 'default' | 'scrollable' = 'default';
}
