import React from "react";
import Heading from "../common/Heading"
import ReactCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"

const Places = () => {
    return ( 
<>
<section className='recent padding'>
        <div className='container'>
          <Heading title='Top Places of India' />
          <ReactCard />
        </div>
      </section>
</>
     );
}
 
export default Places;