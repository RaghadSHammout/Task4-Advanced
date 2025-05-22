import { heroData } from "../data/homeData";
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero-container">
        <img src="/images/heroImages/build.png" alt="build" className="build" />
      <div className="hero-text-container">
          <h1 className="hero-title">Discover a place you will love to live</h1>
          <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
      </div>

      <div className="info-container">
        {heroData.map((item, index) => (
          <div key={index} className="info">
            <div  className="hero-info-icon"><img src={item.img} alt={item.title} width={30}/></div>
            <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
