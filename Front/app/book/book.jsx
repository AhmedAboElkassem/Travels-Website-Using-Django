"use client";

import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { TripContext } from "../Context/Context";
import Swal from "sweetalert2";
import axios from "axios";

export default function Book() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [date, setDate] = useState("");
  const router = useRouter();
  const { selectedTrip, setSelectedTrip } = useContext(TripContext);
  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        const options = countries.map((country) => ({
          value: country.name.common,
          label: country.name.common,
        }));
        setCountryOptions(options);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);
  async function searchTrip() {
    const values = {
      from: fromCountry.value,
      to: toCountry.value,
      date: date,
    };
    try {
      let response = await axios.post(
        "https://aboelkassem.pythonanywhere.com/api/flight/",
        values
      );
      const filteredTrips = response.data;
      console.log("response", filteredTrips);

      if (filteredTrips.length > 0) {
        Swal.fire({
          title: "Trips",
          html: `
          <div style="text-align: left;" >
            ${filteredTrips
              .map(
                (trip, index) => `
              <div id="trip-${index}" class="swal-trip-item " style="margin-bottom: 10px;">
                <div class="row ">
                <p class="col-lg-6"><strong>From:</strong> ${trip.from}</p>
                <p class="col-lg-6"><strong>To:</strong> ${trip.to}</p></div>
                <p><strong>Date:</strong> ${trip.date}</p>
                <p><strong>Price:</strong> ${trip.price}</p>
                <p><strong>Airline:</strong> ${trip.airline}</p>
                <div class="row justify-content-end">
                <button class="swal-trip-select col-12 col-lg-4  btn btn-primary" data-trip-index="${index}">Select</button>
                </div>
                <hr/>
              </div>`
              )
              .join("")}
          </div>
        
        
        `,
          showConfirmButton: false,
          didOpen: () => {
            filteredTrips.forEach((trip, index) => {
              const tripElement = document.querySelector(
                `#trip-${index} .swal-trip-select`
              );
              if (tripElement) {
                tripElement.addEventListener("click", () =>
                  handleSelectTrip(trip)
                );
              }
            });
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "No trips found",
          text: "Please try searching with different criteria.",
        });
      }
    } catch (error) {
      if (
        error.response.data.message ===
        "No flights found matching the criteria."
      ) {
        Swal.fire({
          icon: "error",
          title: "No trips found",
          text: "Please try searching with different criteria.",
        });
      }
      // console.log("error", error.response.data);
    }
  }

  const handleSelectTrip = (trip) => {
    setSelectedTrip(trip);
    Swal.close();
    router.push("/Booking");
  };
  useEffect(() => {
    console.log("SelectedTrip has been updated:", selectedTrip);
  }, [selectedTrip]);
  return (
    <>
      <div className="row m-0 p-0 justify-content-center align-items-center">
        <div className="col-lg-8 trip row py-5">
          <div className="col-lg-3">
            <h6>From</h6>
            <Select
              options={countryOptions}
              isSearchable={true}
              placeholder="Select a country"
              onChange={setFromCountry}
            />
          </div>
          <div className="col-lg-3">
            <h6>To</h6>
            <Select
              options={countryOptions}
              isSearchable={true}
              placeholder="Select a country"
              onChange={setToCountry}
            />
          </div>
          <div className="col-lg-3">
            <h6>Date</h6>
            <input
              type="date"
              placeholder="Check in"
              className="btn css-13cymwt-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="col-lg-3 d-flex align-items-end">
            <button className="btn btn-primary" onClick={searchTrip}>
              Search <i className="ps-2 fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
