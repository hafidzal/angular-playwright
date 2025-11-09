import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KaiwaCardComponent } from './components/kaiwa-card/kaiwa-card.component';
import { KaiwaEntry } from './models/kaiwa.interface';
import { KaiwaService } from './services/kaiwa.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, KaiwaCardComponent, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  currentIndex = 0;
  kaiwaList: KaiwaEntry[] = [];

  constructor(private kaiwaService: KaiwaService) {
    this.kaiwaList = this.kaiwaService.getCurrentKaiwaList();
  }

  get currentKaiwa(): KaiwaEntry {
    return this.kaiwaList[this.currentIndex];
  }

  previousKaiwa() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextKaiwa() {
    if (this.currentIndex < this.kaiwaList.length - 1) {
      this.currentIndex++;
    }
  }
  
  ngOnInit(): void {
    // Initialize component here
  }

}
