import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KaiwaEntry } from '../models/kaiwa.interface';

@Injectable({
  providedIn: 'root'
})
export class KaiwaService {
  private kaiwaListSubject = new BehaviorSubject<KaiwaEntry[]>([
    {
      id: '1',
      situation: 'Perkenalan Diri',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: 'はじめまして。山田です。',
          furigana: 'はじめまして。やまだです。',
          romaji: 'Hajimemashite. Yamada desu.',
          translation: 'Senang bertemu dengan Anda. Saya Yamada.'
        },
        {
          speaker: 'B',
          japanese: 'はじめまして。田中です。よろしくお願いします。',
          furigana: 'はじめまして。たなかです。よろしくおねがいします。',
          romaji: 'Hajimemashite. Tanaka desu. Yoroshiku onegaishimasu.',
          translation: 'Senang bertemu dengan Anda. Saya Tanaka. Mohon bantuannya.'
        }
      ],
      tags: ['greeting', 'introduction']
    },
    {
      id: '2',
      situation: 'Menanyakan Kabar',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: 'お元気ですか。',
          furigana: 'おげんきですか。',
          romaji: 'Ogenki desu ka.',
          translation: 'Apa kabar?'
        },
        {
          speaker: 'B',
          japanese: 'はい、元気です。山田さんは？',
          furigana: 'はい、げんきです。やまださんは？',
          romaji: 'Hai, genki desu. Yamada-san wa?',
          translation: 'Ya, saya baik. Kalau Yamada?'
        }
      ],
      tags: ['greeting', 'daily conversation']
    },
    {
      id: '3',
      situation: 'Meminta Sesuatu',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: '水をください。',
          furigana: 'みずをください。',
          romaji: 'Mizu o kudasai.',
          translation: 'Tolong berikan air.'
        }
      ],
      tags: ['request']
    },
    {
      id: '4',
      situation: 'Menanyakan Waktu',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: '今何時ですか。',
          furigana: 'いまなんじですか。',
          romaji: 'Ima nanji desu ka.',
          translation: 'Jam berapa sekarang?'
        },
        {
          speaker: 'B',
          japanese: '三時です。',
          furigana: 'さんじです。',
          romaji: 'Sanji desu.',
          translation: 'Jam tiga.'
        }
      ],
      tags: ['time']
    },
    {
      id: '5',
      situation: 'Menanyakan Lokasi',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: 'トイレはどこですか。',
          furigana: 'といれはどこですか。',
          romaji: 'Toire wa doko desu ka.',
          translation: 'Di mana toilet?'
        },
        {
          speaker: 'B',
          japanese: 'あそこです。',
          furigana: 'あそこです。',
          romaji: 'Asoko desu.',
          translation: 'Di sana.'
        }
      ],
      tags: ['location']
    },
    {
      id: '6',
      situation: 'Menyatakan Suka',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: '日本語が好きです。',
          furigana: 'にほんごがすきです。',
          romaji: 'Nihongo ga suki desu.',
          translation: 'Saya suka bahasa Jepang.'
        }
      ],
      tags: ['feeling']
    },
    {
      id: '7',
      situation: 'Menyatakan Tidak Tahu',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: '分かりません。',
          furigana: 'わかりません。',
          romaji: 'Wakarimasen.',
          translation: 'Saya tidak tahu.'
        }
      ],
      tags: ['knowledge']
    },
    {
      id: '8',
      situation: 'Menyatakan Bisa',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: 'できます。',
          furigana: 'できます。',
          romaji: 'Dekimasu.',
          translation: 'Saya bisa.'
        }
      ],
      tags: ['ability']
    },
    {
      id: '9',
      situation: 'Menanyakan Harga',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: 'これはいくらですか。',
          furigana: 'これはいくらですか。',
          romaji: 'Kore wa ikura desu ka.',
          translation: 'Berapa harganya?'
        },
        {
          speaker: 'B',
          japanese: '五百円です。',
          furigana: 'ごひゃくえんです。',
          romaji: 'Gohyaku en desu.',
          translation: 'Lima ratus yen.'
        }
      ],
      tags: ['price']
    },
    {
      id: '10',
      situation: 'Menyatakan Terima Kasih',
      level: 'basic',
      conversation: [
        {
          speaker: 'A',
          japanese: 'ありがとうございます。',
          furigana: 'ありがとうございます。',
          romaji: 'Arigatou gozaimasu.',
          translation: 'Terima kasih.'
        },
        {
          speaker: 'B',
          japanese: 'どういたしまして。',
          furigana: 'どういたしまして。',
          romaji: 'Dou itashimashite.',
          translation: 'Sama-sama.'
        }
      ],
      tags: ['thanks']
    }
  ]);

  kaiwaList$ = this.kaiwaListSubject.asObservable();

  getCurrentKaiwaList(): KaiwaEntry[] {
    return this.kaiwaListSubject.value;
  }

  getKaiwaById(id: string): KaiwaEntry | undefined {
    return this.kaiwaListSubject.value.find(kaiwa => kaiwa.id === id);
  }

  getKaiwaByLevel(level: 'basic' | 'intermediate' | 'advanced'): KaiwaEntry[] {
    return this.kaiwaListSubject.value.filter(kaiwa => kaiwa.level === level);
  }

  // Nanti bisa ditambahkan method untuk load data dari API
  private async loadKaiwaData() {
    // Implementation untuk load data dari backend akan ditambahkan nanti
    console.log('Loading kaiwa data...');
  }
}