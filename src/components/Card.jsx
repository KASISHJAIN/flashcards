const Card = ({ text, handleFlip }) => {
  return (
    <div className="card" onClick={handleFlip}>
      <h2>{text}</h2>
    </div>
  )
}

export default Card