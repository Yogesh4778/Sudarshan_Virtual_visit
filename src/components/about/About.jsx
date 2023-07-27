import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/aboutt.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Best Places' subtitle='Check out our Best Places of India to visit' />
<p>India is home to numerous pilgrimage sites that are sacred to people of various faiths. From the holy city of Varanasi on the banks of the Ganges to the Golden Temple in Amritsar, from the ancient Ajanta and Ellora caves to the majestic temples of Khajuraho and Konark, India's spiritual and architectural heritage is vast and diverse.

<br/><br/>In recent years, with the advent of technology and the internet, it has become possible for people to embark on virtual visits to these sites without physically being present there. Virtual tours, live webcasts, 360-degree videos, and other digital tools have opened up new avenues for exploring the rich history, art, and spirituality of Indian pilgrimage .

</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='https://www.seawatersports.com/img/newimage/places/babulnath-temple.png' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
