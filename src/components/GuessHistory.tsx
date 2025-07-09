import React from 'react'

interface GuessItem {
  guess: number
  result: string
}

interface GuessHistoryProps {
  history: GuessItem[]
}

const GuessHistory: React.FC<GuessHistoryProps> = ({ history }) => {
  return (
    <div className="guess-history">
      {history.length === 0 ? (
        <p>No guesses yet.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              Guess {index + 1}: {item.guess} - {item.result}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GuessHistory