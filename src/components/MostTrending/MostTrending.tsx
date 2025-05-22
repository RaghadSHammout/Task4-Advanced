import TrendingCard from './TrendingCard'
import './MostTrending.css'
import MainTitle from '../MainTitle/MainTitle'

export interface Property {
    id: number
    imageUrl: string
    price: number
    title: string
    address: string
}

interface MostTrendingProps {
    properties: Property[]
}

function MostTrending({ properties }: MostTrendingProps) {
    return (
        <>
            <MainTitle title='Most Trending' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing eli' />

            <section className="trend-property-section">
                <div className="trend-property-list">
                    {properties.map((property) => (
                        <TrendingCard
                            key={property.id}
                            imageUrl={property.imageUrl}
                            price={property.price}
                            title={property.title}
                            address={property.address}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default MostTrending
