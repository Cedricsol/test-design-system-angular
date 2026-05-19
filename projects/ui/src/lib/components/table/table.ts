import { NgClass } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  width?: string;
}

@Component({
  selector: 'ui-table',
  imports: [NgClass],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table<T = any> implements AfterViewInit {
  @Input() columns: TableColumn<T>[] = [];
  @Input() data: T[] = [];
  @Input() variant: 'default' | 'scrollable' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @ViewChild('scrollBody')
  scrollBody!: ElementRef<HTMLDivElement>;

  scrollbarWidth = 0;

  private resizeObserver!: ResizeObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.calculateScrollbarWidth();
    });

    this.resizeObserver = new ResizeObserver(() => {
      this.calculateScrollbarWidth();
    });

    this.resizeObserver.observe(this.scrollBody.nativeElement);
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateScrollbarWidth();
  }

  private calculateScrollbarWidth(): void {
    if (!this.scrollBody) {
      return;
    }
    const element = this.scrollBody.nativeElement;
    const width = element.offsetWidth - element.clientWidth;

    if (width !== this.scrollbarWidth) {
      this.scrollbarWidth = width;

      this.cdr.detectChanges();
    }
  }
}
