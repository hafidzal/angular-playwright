export interface KaiwaEntry {
  id: string;
  situation: string;
  level: 'basic' | 'intermediate' | 'advanced';
  conversation: DialogueLine[];
  audioUrl?: string;
  tags: string[];
}

export interface DialogueLine {
  speaker: 'A' | 'B';
  japanese: string;
  furigana: string;
  romaji: string;
  translation: string;
}

export interface QuizQuestion {
  type: 'multiple-choice' | 'ordering' | 'listening';
  kaiwaRef: string;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface UserProgress {
  completedKaiwa: string[];
  quizScores: Record<string, number>;
  dailyStreak: number;
  lastStudied: Date;
}