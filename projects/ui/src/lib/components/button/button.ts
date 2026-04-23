import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get classes(): string {
    const base = 'rounded-md font-semibold transition';
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90',
      secondary: 'bg-gray-200 text-gray-900',
    };
    const sizes = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    };

    return `${base} ${variants[this.variant]} ${sizes[this.size]}`;
  }
}
