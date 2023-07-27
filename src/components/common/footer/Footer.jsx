import React from "react"
import { footer } from "../../data/Data"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to find your best place for visit</p>
            </div>
            <Link to={"/contact"}>
            <button className='btn5'>Contact Us Today</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, best exprience and best places that you never visit before</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' style={{marginRight:"15px"}}/>
                <button className="btn2">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        {/* <span>© 2021 RentUP. Designd By GorkCoder.</span> */}
      </div>
    </>
  )
}

export default Footer
