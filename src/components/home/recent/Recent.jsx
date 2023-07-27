import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Most Favorite of India' subtitle='Most of the people visited this places and those who want to visit the places pf India' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
