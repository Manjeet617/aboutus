import React from 'react';
import './App.css'
function App() {
  return (
    <>
      <div className="cont">
        <div className="element">
          <img
            src="https://www.w3villa.com/production/assets/logo-1-0cf06f8aef88f5778904cc40290b18da01c6cf5bff74594cb3b2fc4d0a353acf.webp"
            height="50px"
            width="150"
            alt="W3villa Logo"
          />
        </div>
        <div className="element"><h6>Artificial Intelligence</h6></div>
        <div className="element"><h6>Services</h6></div>
        <div className="element"><h6>Technologies</h6></div>
        <div className="element"><h6>Solutions</h6></div>
        <div className="element"><h6>Company</h6></div>
        <div className="element"><h6>Career</h6></div>
        <div className="element"><h6>Blog</h6></div>
        <div className="element"><button>Enquiry</button></div>
      </div>

      <div className="cont1">
        <div className="element1">
          <h1>Our digital solution helps companies to scale their business</h1>
          <h4>We have built enormous solutions for startups and enterprises across the world</h4>
          <button>See our work &gt;</button>
        </div>
        <img
          src="https://www.w3villa.com/production/assets/landing_page/banner_2_digital-12d2a65725612b69be142e6653792f0d7981dc0fcd1d35cc4ceabc15278efbca.webp"
          alt="W3villa Banner"
          height="350px"
          width="350px"
        />
      </div>

      <div className="cont2">
        <img src="https://www.w3villa.com/production/assets/landing_page/adobe-4-5a6302ef3237aafcb0f7832df87b62a29284f52af943a4aea920903c4cce6c9d.png" alt="Adobe" />
        <img src="https://www.w3villa.com/production/assets/landing_page/aws-4-52d80c8eec25f6cb354e51438fff2b69cd59d1a0368f5461553a990759bf4e0d.png" alt="AWS" />
        <img src="https://www.w3villa.com/production/assets/landing_page/new-relic-4-1ec5ce3f4cf08b4db0ff61df3d6a8bb0d84709a6e333ddaaad454dee91945ccb.png" alt="New Relic" />
        <img src="https://www.w3villa.com/production/assets/landing_page/gorgias-4-2b8fac76ade5e9f07b89dfdecbccb8526f911ef4182b54a742fad3c71d7f7ad1.png" alt="Gorgias" />
      </div>

      <div className="cont3">
        <div className="element3">
          <img
            src="https://www.w3villa.com/production/assets/landing_page/who_we_are_image-2.0-2f0adc5481a3332c4fb5247b79b5ac355bd2642f088587aafbc6085665d9f60d.webp"
            alt="Who We Are"
            height="350px"
            width="350px"
          />
        </div>
        <div>
          <h4>About Us</h4>
          <h1>Who we are?</h1>
          <p>
            We are CMMi Level 3 appraised software development company that offers state-of-the-art technological
            solutions to startups, SMEs, and enterprises across the globe. We bring a design-led approach to integrate
            digital transformation by incorporating innovative solutions to improve customer experience. Our 100+
            dedicated engineers are well-trained to deploy on any complexity development project with unparalleled results.
          </p>
          <p>
            We do believe in structured and automated support systems by implementing agile and scrum methodology in our
            day-to-day operations that keep our clients accurate in any delivery.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
