import React from 'react';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          {/* <p className="section--title">Hey, I'm John</p> */}
          <h1 className="hero--section--title"style={{ color: '#ff5100'}} >
            <span className="hero--section-title--color">Decoding Bollywood</span>{" "}
            <br />
            Hits
          </h1>
          <p className="hero--section-description"style={{ color: '#fff',fontStyle:'normal'}}>
            An Academy for artists
            <br /> 
            </p>
            <p className="hero--section-description" style={{fontStyle:'italic'}}>
            Here, we're not just exploring music; we are diving deep into the heart and soul of it.
            </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
