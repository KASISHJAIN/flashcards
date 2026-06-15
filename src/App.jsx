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
  },
  {
    question: "What is a stack?",
    answer: "LIFO data structure."
  },
  {
    question: "What is a queue?",
    answer: "FIFO data structure."
  },
  {
    question: "What is an API?",
    answer: "A way for software applications to communicate."
  },
  {
    question: "What is recursion?",
    answer: "A function calling itself."
  },
  {
    question: "What is Big O?",
    answer: "Notation describing algorithm efficiency."
  }
]

function App() {
  const [currentCard, setCurrentCard] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length)

    setCurrentCard(randomIndex)
    setFlipped(false)
  }

  return (
    <div className="app">

      <h1>Computer Engineering Flashcards</h1>

      <p>
        Test your knowledge of common computer engineering concepts.
      </p>

      <h3>Total Cards: {cards.length}</h3>

      <Card
        text={
          flipped
            ? cards[currentCard].answer
            : cards[currentCard].question
        }
        handleFlip={() => setFlipped(!flipped)}
      />

      <button onClick={nextCard}>
        Next Card
      </button>

    </div>
  )
}

export default App