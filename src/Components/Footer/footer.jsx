import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'; // Asegúrate de crear un archivo SCSS para estilos

const Footer = () => {
    return (
        <footer className="footer">
            <span className='lineaUp'></span>
            <div className="footer-content">
                <div className="logo-container">
                    <img src="Myimage/logo2.png" alt="Logo" className="footer-logo" />
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/academica.expres/" target="_blank" rel="noreferrer">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#2aa4f4"></stop>
                                    <stop offset="1" stopColor="#007ad9"></stop>
                                </linearGradient>
                                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/academicaexpress/" target="_blank" rel="noreferrer">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fd5"></stop>
                                    <stop offset=".328" stopColor="#ff543f"></stop>
                                    <stop offset=".348" stopColor="#fc5245"></stop>
                                    <stop offset=".504" stopColor="#e64771"></stop>
                                    <stop offset=".643" stopColor="#d53e91"></stop>
                                    <stop offset=".761" stopColor="#cc39a4"></stop>
                                    <stop offset=".841" stopColor="#c837ab"></stop>
                                </radialGradient>
                                <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                                <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                                <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                        </div>
                    </a>
           
                </div>
            </div>
            <div className="footer-links">
                <Link to="/nosotros">Quienes somos</Link>
                <Link to="/faq">Preguntas Frecuentes</Link>
            </div>

            <div className="legal-info">
                <Link to="/aviso-legal"><span>Aviso legal</span></Link>
                <span className="separator">|</span>
                <Link to="/politica-privacidad"><span>Política de privacidad</span></Link>
                <span className="separator">|</span>
                <Link to="/condiciones-venta"><span>Condiciones Generales de venta, entrega y devoluciones</span></Link>
            </div>

            <div className="footer-bottom">
                <p>2024 Academica Express</p>
                <p>Design by GlowNet</p>
            </div>

        </footer>
    );
};

export default Footer;
