import React from "react"
import { featured } from "../../data/Data"
import { Link } from "react-router-dom"



const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <Link to={items.path}>
            <img src={items.cover} alt='' />
            </Link>
            <h4>{items.name}</h4>
            <label>{items.total}</label>
            
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
