"use client";
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Special from "../specialOffers/Special";
import GetHotel from "./getHotel";
export default function Hotel() {
  return (
    <>
      <div className="ass">
        <div className="as position-relative vh-100">
          <Navbar />
          <div className="container">
            <div className="row my-5">
              <h1 className="Hotel_h1 col-lg-9">Explore your place to stay</h1>
            </div>
            <GetHotel />
          </div>
        </div>
      </div>

      <Special />
      <Footer />
    </>
  );
}
