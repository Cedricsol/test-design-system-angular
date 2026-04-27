import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, Table } from 'ui';

type ColumnKey = {
  name: string;
  date: string;
  creator: string;
};

const columns: { key: keyof ColumnKey; label: string }[] = [
  { key: 'name', label: 'Nom' },
  { key: 'date', label: 'Date de première version' },
  { key: 'creator', label: 'Créateur' },
];

const languages = [
  { name: 'Plankalkül', date: '1943', creator: 'Konrad Zuse' },
  { name: 'AUTOCODE', date: '1952', creator: 'Alick Glennie' },
  { name: 'FORTRAN', date: '1957', creator: 'John Backus' },
  { name: 'ALGOL', date: '1958', creator: 'John Backus, Peter Naur' },
  { name: 'LISP', date: '1958', creator: 'John McCarthy' },
  { name: 'COBOL', date: '1959', creator: 'Grace Hopper' },
  { name: 'BASIC', date: '1964', creator: 'John G. Kemeny, Thomas E. Kurtz' },
  { name: 'PL/1', date: '1964', creator: 'IBM' },
  { name: 'APL', date: '1966', creator: 'Kenneth E. Iverson' },
  { name: 'Simula', date: '1967', creator: 'Ole-Johan Dahl, Kristen Nygaard' },
  { name: 'C', date: '1972', creator: 'Denis Ritchie, Brian Kernighan' },
  { name: 'SQL', date: '1974', creator: 'Donald D. Chamberlin, Raymond F. Boyce' },
  { name: 'Ada', date: '1980', creator: 'Jean Ichbiah' },
  { name: 'C++', date: '1985', creator: 'Bjarne Stroustrup' },
  { name: 'Perl', date: '1987', creator: 'Larry Wall' },
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Table],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('test-design-system-angular');
  columns = columns;
  data = languages;
}
