import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import { Link } from "react-router-dom"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='We providing you the best places from different states which you are not able to visit yet.' />

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <Link to={item.path}>
                  <h5 style={{color:"white"}}>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                  </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
