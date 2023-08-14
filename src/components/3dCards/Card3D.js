import React from "react";
import "./Card3D.style.css";

const Card3D = () => {
  return (
    <>
      <div className="cardContainer">
        <div className="header">
          <h1>MY PROJECTS</h1>
          {/* <p>Guest, here are my projects both completed and still working on</p> */}
        </div>
        
        <div className="projects">

          <div className="folder">
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do sit esse et et amet pariatur Lorem Lorem
                proident voluptate do quis magna laboris sit voluptate et dolor
                nulla nisi minim amet laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://ryecode.github.io/portfolio/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to Visit Website
              </a>
            </div>
            <div className="card-fg">
              <img
                class="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RyePortfolioSS.jpeg"
                alt="website screenshot"
              />
            </div>
          </div>

          <div className="folder">
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://etiket-com-mu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to Visit Website
              </a>
            </div>
            <div className="card-fg">
              <img
                class="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/EtiketSS.jpeg"
                alt="website screenshot"
              />
            </div>
          </div>

          <div className="folder">
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://ryetictactoe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to Visit Website
              </a>
            </div>
            <div className="card-fg">
              <img
                class="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RyeTicTacToeSS.jpeg"
                alt="website screenshot"
              />
            </div>
          </div>

          <div className="folder">
            <div className="card-bg">
              <p>
                {" "}
                sit esse et et amet pariatur Lorem Lorem proident voluptate do
                quis magna laboris sit voluptate et dolor nulla nisi minim amet
                laborum aliquip do
              </p>
            </div>
            <div className="card-cta">
              <a
                href="https://ryestudios.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tap here to Visit Website
              </a>
            </div>
            <div className="card-fg">
              <img
                class="card-image"
                src="https://ryecode.github.io/portfolio/ImageBank/RyeStudiosSS.jpeg"
                alt="website screenshot"
              />
              {/* <p className='case-study'>Etiket.com</p>
                    <p className='review'>
                        sit esse et et amet pariatur Lorem Lorem proident voluptate do quis magna laboris sit voluptate et dolor nulla nisi minim amet laborum aliquip do
                    </p>
                    <div className='logo'>
                        <img src='https://ryecode.github.io/portfolio/ImageBank/RYELogoBLackSphere.png' alt='logo' />
                    </div> */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Card3D;
