import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmTableImports } from '@spartan-ng/helm/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmButtonImports, HlmTableImports],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('test-design-system-angular');
  _invoices = [
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
    {
      invoice: 'INV001',
      paymentStatus: 'Paid',
      paymentMethod: 'Credit Card',
      totalAmount: '$250.0',
    },
    { invoice: 'INV002', paymentStatus: 'Pending', paymentMethod: 'PayPal', totalAmount: '$150.0' },
    {
      invoice: 'INV003',
      paymentStatus: 'Unpaid',
      paymentMethod: 'Bank Transfer',
      totalAmount: '$350.0',
    },
  ];
}
