import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-row">
              {/* Column 1: About */}
              
              <div className="footer-col about">
                <img src="/cc_logo1.png" alt="Cinema Club Logo" className="footer-logo" />
                <p className="footer-description">
                  The official film and media society of IIT Roorkee, Cinema Club hosts screenings, discussions, and creative work to foster storytelling and film appreciation.
                </p>
              </div>
              {/* Column 2: Address */}
              <div className="footer-col address">
                <h4 className="footer-heading">ADDRESS</h4>
                <p className="footer-address">
                  Cinema Club Room, SAC <br/>
                  IIT Roorkee<br />
                  Roorkee, Uttarakhand – 247667
                </p>
              </div>
              {/* Column 3: Explore */}
              <div className="footer-col explore">
                <h4 className="footer-heading">EXPLORE</h4>
                <ul className="footer-links">
                  <li><a href="/">Home</a></li>
                  <li><a href="/movies">Movies </a> </li>
                  <li><a href="/events">Events</a></li>
                  <li><a href="/team">Team</a></li>
                </ul>
              </div>
              {/* Column 4: Contact */}
              <div className="footer-col contact">
                <h4 className="footer-heading">CONTACT US</h4>
                <p>cinemaclub@iitr.ac.in</p>
                <p>+91 82218 28585</p>
                <p>+91 63756 43068</p>
                <div className="footer-socials">
                  <a href="https://www.facebook.com/CinemaClubIITR/" target="_blank" rel="noopener noreferrer">
                    <img src="/facebook.png" alt="Facebook" className="social-icon" />
                  </a>
                  <a href="https://www.instagram.com/cinema_club_iitr/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src="/insta.png" alt="Instagram" className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com/company/cinema-club-iitr/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                    <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Cinema Club IIT Roorkee. All rights reserved.
          </div>
        </footer>
      );
}

export default Footer

