import type { PropertyData } from '../data/homeData';
import './PropertyCard.css';

interface PropertyCardProps {
    property: PropertyData;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <div className="property-card">
            <div className="property-image-container">
                <img src={property.image} className="property-image" />
                <div className="property-tags">
                    {property.featured && <span className="tag featured-tag">Featured</span>}
                    {property.has3DTour && <span className="tag threed-tag">3D</span>}
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
