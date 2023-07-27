import React, { useState } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
var data = require("./Places.json");

const Hero = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Peace' subtitle='Visit Your Best place from Home' />
          <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button className="my-btn" onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
        </div>
      </section>
    </>
  )
}

export default Hero
