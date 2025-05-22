import PropertyCard from './PropertyCard';
import type { PropertyData } from '../data/homeData';
import './PropertyList.css'; 

interface PropertyGridProps {
    properties: PropertyData[];
}

const PropertyList = ({ properties }: PropertyGridProps) => {
    return (
        <div className="property-list">
            {properties.length > 0 ? (
                properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))
            ) : (
                <div className="no-properties-message">
                    <p>No properties found in this category.</p>
                </div>
            )}
        </div>
    );
};

export default PropertyList;
