import { Component, OnInit, signal } from '@angular/core';
import { NgFor } from '@angular/common';

interface Item {
  name: string;
  description: string;
  src: string;
  barcode?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    // Initialize component here
  }
  protected readonly title = signal('frontend');

  items: Item[] = [
    { name: 'Produk A', description: 'Deskripsi Produk A', src: 'https://picsum.photos/id/101/800/600', barcode: '123456789012' },
    { name: 'Produk B', description: 'Deskripsi Produk B', src: 'https://picsum.photos/id/102/800/600', barcode: '223456789012' },
    { name: 'Produk C', description: 'Deskripsi Produk C', src: 'https://picsum.photos/id/103/800/600', barcode: '323456789012' }
  ];

  modalOpen = false;
  selectedItem: Item | null = null;

  openModal(index: number) {
    this.selectedItem = this.items[index];
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedItem = null;
  }
}
