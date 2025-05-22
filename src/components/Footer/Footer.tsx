import './Footer.css';
import type { FooterProps } from '../data/homeData';



function Footer(props: FooterProps) {
    const {
        logo,
        description,
        location,
        sections,
        socialIcons,
        copyright,
        footerLinks,
    } = props;

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-logo"><img src={logo} alt="" /></div>
                    <p className="footer-description">{description}</p>
                </div>

                {sections.map((section, index) => (
                    <div className="footer-column" key={index}>
                        <h4>{section.title}</h4>
                        <ul>
                            {section.links.map((link, i) => (
                                <li key={i}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="footer-column">
                    <h4>Our Location</h4>
                    <p>{location}</p>
                    <div className="social-icons">
                        {socialIcons.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <a key={i} href={item.url} className="icon" title={item.platform}>
                                    <Icon/>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{copyright}</p>
                <div className="footer-links">
                    {footerLinks.map((item, i) => (
                        <a key={i} href={item.url}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
