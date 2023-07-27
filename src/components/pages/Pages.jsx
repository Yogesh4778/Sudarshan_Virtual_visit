import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
// import Places from "../home/recent/RecentCard"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import MP from "../Slider/MP"
import Rajasthan from "../Slider/Rajasthan"
import Gujarat from "../Slider/Gujarat"
import Uttrakhand from "../Slider/Uttrakhand"
import Up from "../Slider/UP"
import TamilNadu from "../Slider/Tamilnadu"
import Maharashtra from "../Slider/Maharashtra"
import Karnataka from "../Slider/Karnataka"
import Kerala from "../Slider/Kerala"
import Odisha from "../Slider/Odisha"
import ScrollToTop from "../ScrollToTop"
import FeedbackForm from "../FeedbackForm/Feedback"
import Kedarnath from "../View Detail/Kedarnath"
import Varanasi from "../View Detail/varanasi"
import Haridwar from "../View Detail/Haridwar"
import Shirdi from "../View Detail/Shirdi"
// import { Place } from "@mui/icons-material"
import Places from "../places/Places"



const Pages = () => {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/places' component={Places} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/mp' component={MP}/>
          <Route exact path='/Rajasthan' component={Rajasthan}/>
          <Route exact path='/gujarat' component={Gujarat}/>
          <Route exact path='/uttrakhand' component={Uttrakhand}/>
          <Route exact path='/up' component={Up}/>
          <Route exact path='/tamilnadu' component={TamilNadu}/>
          <Route exact path='/maharashtra' component={Maharashtra}/>
          <Route exact path='/karnataka' component={Karnataka}/>
          <Route exact path='/kerala' component={Kerala}/>
          <Route exact path='/odisha' component={Odisha}/>
          <Route exact path='/feedback' component={FeedbackForm}/>
          <Route exact path='/kedarnath' component={Kedarnath}/>
          <Route exact path='/varanasi' component={Varanasi}/>
          <Route exact path='/haridwar' component={Haridwar}/>
          <Route exact path='/shirdi' component={Shirdi}/>
        </Switch>
        <Footer />
      </Router>
      
    </>
  )
}

export default Pages
