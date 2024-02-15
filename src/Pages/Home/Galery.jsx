import data from "../../data/index.json";
import React from 'react';
export default function Galery() {
      return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading" style={{color:"#ff5100"}}>Gallery</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.galery?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
          </div>
        ))}
      </div>
</section>
  );
}