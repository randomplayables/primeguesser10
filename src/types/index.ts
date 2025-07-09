export type GameStatus = 'playing' | 'won' | 'lost';

export interface GuessHistoryItem {
  guess: number;
  result: string;
}

export interface RoundData {
  guessHistory: GuessHistoryItem[];
  attemptsLeft: number;
  feedback: string;
  gameStatus: GameStatus;
}

export interface UseGameResult {
  attemptsLeft: number;
  feedback: string;
  guessHistory: GuessHistoryItem[];
  onGuess: (guess: number) => void;
  resetGame: () => void;
  gameStatus: GameStatus;
}

export interface InitGameSessionResponse {
  sessionId: string;
}

export interface SaveGameDataResponse {
  [key: string]: any;
}