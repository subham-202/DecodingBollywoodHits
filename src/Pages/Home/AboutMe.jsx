import React from 'react';
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading" style={{ color: '#ff5100' }}>About Us</h1>
          <p className="hero--section-description" style={{ justifyContent: "stretch" }}>
            Meet Sanskar Saswat, a name synonymous with excellence in the world of music. With a passion for melody coursing through his veins, Sanskar has carved his niche as a national level finalist in a prestigious singing reality show. For the past eight years, he has been immersed in the harmonious realm of music, and his journey shows no signs of slowing down.
          </p>
          <p className="hero--section-description">
           Fuelled by a fervent desire to share his musical expertise, Sanskar is embarking on a new venture – the establishment of an academy that promises to nurture aspiring musicians in a multitude of disciplines. From the intricate melodies of the keyboard and piano to the rhythmic beats of the tabla and the soulful renditions of singing, "Decoding Bollywood Hits Academy" offers a comprehensive curriculum tailored to the diverse tastes of music enthusiasts. 
           With Sanskar Saswat at the helm, "Decoding Bollywood Hits Academy" is poised to become the premier destination for aspiring musicians seeking to embark on a transformative musical journey. <br/>Join him, and unlock the doors to a world where melody reigns supreme, and dreams take flight on the wings of music.
          </p>
        </div>
      </div>
    </section>
  );
}
