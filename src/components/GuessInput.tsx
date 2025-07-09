import React, { useState, ChangeEvent, FormEvent } from 'react'

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled }) => {
  const [guess, setGuess] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const num = parseInt(guess, 10)
    if (isNaN(num)) {
      return
    }
    onGuess(num)
    setGuess('')
  }

  return (
    <div className="guess-input">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleChange}
          placeholder="Enter your guess"
          disabled={disabled}
        />
        <button type="submit" disabled={disabled || guess === ''}>
          Guess
        </button>
      </form>
    </div>
  )
}

export default GuessInput