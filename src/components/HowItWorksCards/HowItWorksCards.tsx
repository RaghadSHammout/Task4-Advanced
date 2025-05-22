
import './HowItWorksCards.css';

import { cardsData } from '../data/homeData'
import MainTitle from '../MainTitle/MainTitle';

const HowItWorksCards = () => {


  return (
<>
<MainTitle title='How it Works' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing eli'/>
    <div className="how-it-works-container">
          <div className="cards-container">
        {cardsData.map(card => (
          <div key={card.id} className={`card ${card.isBlue ? 'blue-card' : ''}`}>
            <div className="ico">
              <img src={card.icon} alt="" />
            </div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default HowItWorksCards;