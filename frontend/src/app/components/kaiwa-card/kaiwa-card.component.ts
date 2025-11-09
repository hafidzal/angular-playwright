import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { KaiwaEntry } from '../../models/kaiwa.interface';

@Component({
  selector: 'app-kaiwa-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './kaiwa-card.component.html',
  styleUrls: ['./kaiwa-card.component.css']
})
export class KaiwaCardComponent {
  @Input() kaiwa?: KaiwaEntry;
  isFlipped = false;

  flipCard() {
    this.isFlipped = !this.isFlipped;
  }

  playAudio() {
    if (this.kaiwa?.audioUrl) {
      // Implementation untuk audio playback akan ditambahkan nanti
      console.log('Playing audio:', this.kaiwa.audioUrl);
    }
  }
}