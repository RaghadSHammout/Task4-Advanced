import {DreamHomeData}from '../data/homeData'
import './DreamHome.css'
const DreamHome = () => {
  return (
    <div className='dream-home-container'>
         {DreamHomeData.map((item, index) => (
        <div className='dream-home-text' key={index}>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  )
}

export default DreamHome
