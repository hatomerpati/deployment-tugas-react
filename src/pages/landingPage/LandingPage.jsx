import React from 'react';
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <div className="body">
       
        <main id="home" className='mainBro'>
          <div className="hero">
            <div className="hero_desc">
              <div />
              <div className="hatomerpati">
                Better Solutions For Your
                <br />
                Business
              </div>
              <div className="desc">
                We are team of talented designers making websites with Bootstrap
              </div>
              <div className="new text-center align-text-top">
                <button className="btn btn-primary text-white">
                  <Link className="text-white text-center" to={`../create-product`} >
                    Get Started
                  </Link>
                </button>
                <p className="video">Watch Video</p>
              </div>
            </div>
            <div>
              <img src="./Assets/hero-img.png" width="auto" height="60%" />
            </div>
          </div>
        </main>
        <div className="section2">
          <div className="content">
            <div className="desc2">
              <div className="collumn">
                <div />
                <div>
                  <div className="desc_title">Join Our Newsletter</div>
                  <div className="text_desc">
                    Tamen quem nulla quae legam multos aute sint culpa legam noster
                    magna
                  </div>
                  <input required="" type="text" /> <button>Learn More</button>
                </div>
                <div />
              </div>
            </div>
          </div>
          <div className="section23">
            <div className="content21">
              <div className="quotes">
                <div>Arsha</div>
                <div className="p">
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <b>Phone:</b> +1 5589 55488 55
                  <br />
                  <b>Email:</b> info@example.com
                </div>
              </div>
              <div className="quotes">
                Useful Links
                <div className="p">
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Term of services</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
              <div>
                {" "}
                <div className="quotes">
                  Our Services
                  <div className="p">
                    <ul>
                      <li>Web Design</li>
                      <li>Web Development</li>
                      <li>Product Management</li>
                      <li>Marketing</li>
                      <li>Graphic Design</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="quotes">
                {" "}
                Our social Network
                <p className="p">
                  Cras fermentum odio eu feugiat lide par naso tierra videa magna
                  derita valies
                </p>
                <div className="flex">
                  <img src="./Assets/a.png" width="50px" />
                  <img src="./Assets/a.png" width="50px" />
                  <img src="./Assets/a.png" width="50px" />
                  <img src="./Assets/a.png" width="50px" />
                </div>
              </div>
            </div>
          </div>
          <footer id="footer">
            <p>
              © Copyright <b>Arsha.</b> All Rights Reserved
            </p>
            <p>Designed by BootstrapMade</p>
          </footer>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
