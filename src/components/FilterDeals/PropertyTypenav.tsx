import MainTitle from "../MainTitle/MainTitle";
import "./PropertyTypeNav.css";

interface PropertyTypeNavProps {
    propertyTypes: string[];
    activePropertyType: string;
    onSelectPropertyType: (type: string) => void;
}

const PropertyTypeNav = ({
    propertyTypes,
    activePropertyType,
    onSelectPropertyType,
}: PropertyTypeNavProps) => {
    return (
        <>
        <MainTitle title="Best Real Estate Deals" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
                <nav className="property-type-nav">
            <ul>
                {propertyTypes.map((type) => (
                    <li
                        key={type}
                        className={activePropertyType === type ? "active" : ""}
                        onClick={() => onSelectPropertyType(type)}
                    >
                        {type} Property
                    </li>
                ))}
            </ul>
        </nav>
        </>

    );
};

export default PropertyTypeNav;
