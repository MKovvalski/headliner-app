import React from "react";
import Logo from "../components/Logo";

interface IFooterSection {
    title: string;
    modifier?: "lavender" | "peach";
    children: React.ReactNode | string;
}

const FooterSection: React.FC<IFooterSection> = ({ title, modifier, children }) => {
    return (
        <div className="footer-section">
            <div className={`footer-section__title footer-section__title--${modifier}`}>{title}</div>
            <div className="footer-section__values">{children}</div>
        </div>
    );
};

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer__content-wrapper">
                <div className="footer__logo-wrapper">
                    <Logo />
                </div>
                <FooterSection title="Author" modifier="lavender">
                    Mateusz Jakub Kowalski
                </FooterSection>
                <FooterSection title="Socials" modifier="peach">
                    <div className="footer__socials">
                        <a
                            className="footer__link"
                            target="_blank"
                            href="https://www.linkedin.com/in/mateusz-kowalski-62b758113/"
                        >
                            Linkedin
                        </a>
                        <a className="footer__link" target="_blank" href="https://github.com/MKovvalski">
                            Github
                        </a>
                    </div>
                </FooterSection>
                <FooterSection title="Data sources">
                    <a className="footer__link" target="_blank" href="https://newsapi.org">
                        News API
                    </a>
                </FooterSection>
            </div>
        </div>
    );
};

export default Footer;
