import React from 'react'
import { GameStatus } from '../types'

interface ScoreBoardProps {
  attemptsLeft: number
  feedback: string
  gameStatus: GameStatus
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ attemptsLeft, feedback, gameStatus }) => {
  const feedbackClass = `feedback-${gameStatus}`
  return (
    <div className="scoreboard">
      <div className="attempts-left">Attempts Left: {attemptsLeft}</div>
      <div className={`feedback ${feedbackClass}`}>{feedback}</div>
    </div>
  )
}

export default ScoreBoard