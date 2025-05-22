import { IoLocationOutline } from "react-icons/io5";

  interface TrendingCardProps {
    imageUrl: string;
    price: number;
    title: string;
    address: string;
  }

  function TrendingCard({ imageUrl, price, title, address }: TrendingCardProps) {
    return (
      <div className="trend-property-card">
        <div className="trend-property-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="trend-property-info">
          <h3 className="trend-property-price">${price}</h3>
          <h2 className="trend-property-title">{title}</h2>
          <div className="trend-property-address">
          <IoLocationOutline size={25} />

            <span>{address}</span>
          </div>
        </div>
      </div>
    );
  }

  export default TrendingCard;
