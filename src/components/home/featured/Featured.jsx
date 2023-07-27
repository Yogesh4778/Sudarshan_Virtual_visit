import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Best Places of India' subtitle='Find Your best place for visit.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
