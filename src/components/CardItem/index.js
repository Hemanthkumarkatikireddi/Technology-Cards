// Write your code here.
import './index.css'

const TechCards = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards

  return (
    <li className={`${className} boxes`}>
      <h1 className="title">{title}</h1>
      <p className="discription">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechCards
