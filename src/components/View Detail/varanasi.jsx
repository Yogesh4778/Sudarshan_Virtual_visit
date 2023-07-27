import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {varansi} from "../data/ViewDetail"
import { Link } from "react-router-dom";
import "./detail.css";


const Detail = () => {
  return (
    <>
    {varansi.map((item, index) => (
      <div key={index}>
      <section className="main" style={{backgroundImage:`url(${item.background})`}}>
        <div className="container">
          <h1>{item.name}</h1>
          <h2>
            {item.line}
          </h2>
          <h3>
            <LocationOnIcon style={{ fontSize: "25px" }} /> Location
          </h3>
          <Link to={item.map}>
          <button className="btn5">
            <h5>{item.location}</h5>
          </button>
          </Link>
        </div>
      </section>
      
      <div className="flex flex-row">
        <div className="left">
          <div className="overview">
            <h2>Overview</h2>
            <p>
            {item.overview}
            </p>
          </div>
        </div>
        <div className="right">
          <img src={item.overviewImg} alt="" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="left">
          <img src={item.historyImg} alt="" />
        </div>
        <div className="right">
          <div className="overview">
            <h2>History</h2>
            <p>
              {item.history}
            </p>
          </div>
        </div>
      </div>
      <div className="virtual">
        <h2>Virtual visit</h2>
        <div className="flex flex-row">
            <div className="left">
            <iframe
            width="660"
            height="385"
            src={item.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen='allowFullScreen'
            ></iframe>
            </div>
            <div className="right mb-20">
              <div className="ImgSection">
               <img src={item.img1} alt="" />
               <img src={item.img2} alt="" />
               <img src={item.img3} alt="" />
               </div>
            </div>
      </div>
      </div>
      </div>
))}
    </>
  );
};

export default Detail;
