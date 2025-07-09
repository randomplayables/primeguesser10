import React from 'react'
import useGame from './hooks/useGame'
import ScoreBoard from './components/ScoreBoard'
import GuessInput from './components/GuessInput'
import GuessHistory from './components/GuessHistory'

const App: React.FC = () => {
  const { attemptsLeft, feedback, guessHistory, onGuess, gameStatus, resetGame } = useGame()

  return (
    <div className="app-container">
      <h1>Prime Number Guessing Game</h1>
      <ScoreBoard attemptsLeft={attemptsLeft} feedback={feedback} gameStatus={gameStatus} />
      <GuessInput onGuess={onGuess} disabled={gameStatus !== 'playing'} />
      <GuessHistory history={guessHistory} />
      {gameStatus !== 'playing' && (
        <button onClick={resetGame}>
          {gameStatus === 'won' ? 'Play Again' : 'Try Again'}
        </button>
      )}
    </div>
  )
}

export default App