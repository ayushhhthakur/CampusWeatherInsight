import React from 'react';
import '../css/Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>MIET Jammu, Kot Bhalwal, 181122</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91 90183 12123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>info@mietjammu.in</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 text-center text-lg-left">
        <div className="copyright-text">
          <p>Copyright &copy; 2024, All Right Reserved <a href="https://ayushthakur.me/" target="_blank" rel="noopener noreferrer">Ayush</a></p>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
        <div className="footer-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://www.mietjmu.in" target="_blank" rel="noopener noreferrer">Official Website</a></li>
            <li><a href="https://mietjmu.in/index.php/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://mietjmu.in/index.php/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

            </footer>
        </>
    );
};

export default Footer;
