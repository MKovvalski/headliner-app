import React from 'react'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footer__content-wrapper'>
                <div className='footer__top-row'>
                    <div className='footer__author'>Mateusz Jakub Kowalski</div>
                </div>
                <div className='footer__middle-row'>
                    <a 
                        className='footer__linkedin'
                        target='_blank'
                        href='https://www.linkedin.com/in/mateusz-kowalski-62b758113/'
                    >
                        Linkedin
                    </a>
                    <a
                        className='footer__github'
                        target='_blank'
                        href='https://github.com/MKovvalski'
                    >
                        Github
                    </a>
                </div>
                <div className='footer__powered'>
                    Data supplied by&nbsp;
                    <a 
                        className='footer__link'
                        target='_blank'
                        href='https://newsapi.org'
                    >
                        News API
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
