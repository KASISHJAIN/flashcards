import { useState } from 'react'
import './App.css'
import Card from './components/Card'

const cards = [
  {
    question: "What is RAM?",
    answer: "Temporary memory used by programs currently running."
  },
  {
    question: "What is a pointer?",
    answer: "A variable that stores a memory address."
  },
  {
    question: "What is TCP?",
    answer: "A reliable transport layer protocol."
  },
  {
    question: "What is a compiler?",
    answer: "A program that translates source code into machine code."
  },
  {
    question: "What is polymorphism?",
    answer: "One interface with multiple implementations."
  }
]

function App() {
  const [currentCard, setCurrentCard] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = () => {
    if (
      guess.trim().toLowerCase() ===
      cards[currentCard].answer.toLowerCase()
    ) {
      setFeedback('Correct!')
    } else {
      setFeedback('Incorrect!')
    }
  }

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      setFlipped(false)
      setGuess('')
      setFeedback('')
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setFlipped(false)
      setGuess('')
      setFeedback('')
    }
  }

  return (
    <div className="app">
      <h1>Computer Engineering Flashcards</h1>
      <p>Study core CE and CS concepts.</p>

      <h3>Total Cards: {cards.length}</h3>

      <Card
        text={
          flipped
            ? cards[currentCard].answer
            : cards[currentCard].question
        }
        handleFlip={() => setFlipped(!flipped)}
      />

      <input
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Submit Guess
      </button>

      <p>{feedback}</p>

      <div>
        <button
          onClick={prevCard}
          disabled={currentCard === 0}
        >
          Previous
        </button>

        <button
          onClick={nextCard}
          disabled={currentCard === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App