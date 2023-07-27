import React from "react"
import img from "../images/servicess.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='States' title='States- All States' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
