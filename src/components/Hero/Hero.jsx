import React from 'react'
import './Hero.css';
import myimg from '../../assets/images/dev.jpg';
import laravel from '../../assets/images/node.png';

import react from '../../assets/images/react-logo.png';
import php from '../../assets/images/express.png';
import js from '../../assets/images/javascript-logo.png';

const Hero = () => {
  return (
    <section className="hero-container" id='home'>
<div className="hero-content">
    <h2>Where Creativity Meets Code</h2>
    <p>Passionate Full stack Developer |  Designing Exceptional Web Solutions with Passion</p>
</div>



<div className="hero-img">
    <div>
        <div className="tech-icon">
        <img className="all-logo" src={php} alt="myimg" />
        </div>
        <img className="my-img" src={myimg} alt="myimg" />
    </div>

<div>
<div className="tech-icon">
<img className="all-logo" src={laravel} alt="react" />
</div>
<div className="tech-icon">
<img className="all-logo" src={react} alt="php" />
</div>
<div className="tech-icon">
<img className="all-logo" src={js} alt="js" />
</div>

</div>




</div>
    </section>
  )
}

export default Hero