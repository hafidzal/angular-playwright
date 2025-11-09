import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary">
      <span>Kaiwa N5</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/learn">
        <mat-icon>school</mat-icon>
        Belajar
      </button>
      <button mat-button routerLink="/quiz">
        <mat-icon>quiz</mat-icon>
        Quiz
      </button>
      <button mat-button routerLink="/progress">
        <mat-icon>bar_chart</mat-icon>
        Progress
      </button>
      <button mat-icon-button (click)="toggleTheme()">
        <mat-icon>dark_mode</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    mat-toolbar {
      margin-bottom: 20px;
    }
  `]
})
export class NavbarComponent {
  toggleTheme() {
    // Implementation untuk toggle theme akan ditambahkan nanti
    console.log('Toggle theme clicked');
  }
}