
import React from 'react'

function HeadLine() {
  return (
    <div className="content">
    <div className='HeadLine'> 
      
      <div id='headerComponent'>
      <figcaption id="ImageNews">
      <h2>U.S. Covid Death Toll Surpasses 700,000 Despite Wide Availability of Vaccines</h2>
      <ul>
        <li>An overwhelming majority of Americans who have died in recent months were unvaccinated, with the latest Covid-19 deaths concentrated in the South.</li>
        <br></br>
        <li>The new and alarming surge of deaths this summer means that the coronavirus pandemic has become the deadliest in American history.
</li>
      </ul>





      </figcaption>


      <img src={`image/headline.png` } alt="Headlineimage" id="HeadLineImage"/>
      
      </div>
      
      <div id='vr'></div>
      </div>
      <div className='SideView'>
      <h2>Merck Says It Has the First Antiviral Pill Effective Against Covid</h2>
<p>The drug maker will seek authorization for molnupiravir, the first drug of its kind. Experts said such pills could be a powerful tool against the virus.</p>
      <hr/>
<h2>California will mandate Covid-19 vaccines for students in kindergarten to 12th grade as soon as next fall.</h2>
<hr/>
<h2>Coronavirus Updates </h2>
<ul>
<li>Virus forces the Broadway musical ‘Aladdin’ to cancel more shows.</li>
<li>American, Alaska Airlines and JetBlue add vaccine mandates for workers.</li>
</ul>
<hr />
<img alt='hotspot' src={'image/hotspots.png'} />
    </div>
    
    </div>
  )
}

export default HeadLine