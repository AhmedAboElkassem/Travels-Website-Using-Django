"use client";
import React, { useContext, useState } from "react";
import { TripContext } from "../Context/Context";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function GetHotel() {
  const { selectedHotel, setselectedHotel } = useContext(TripContext);
  const [guests, setGuests] = useState("");
  const [children, setChildren] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const router = useRouter();
  // import { useRouter } from "next/navigation";

  function HotelCheckout() {
    if (!guests || !children || !checkInDate) {
      setselectedHotel(null);
      console.log("null", selectedHotel);

      toast.error("Please fill in all fields to proceed.");
      return;
      router.refresh();
    }

    const hotelData = {
      guests,
      children,
      checkInDate,
    };
    setselectedHotel(hotelData);
    toast.success("Hotel booking successfully created!");
    console.log("Hotel data saved to context:", hotelData);
    // router.push("/Payment");
    router.refresh();
  }
  return (
    <div className="row">
      <div className="col-lg-10 book p-4">
        <select
          className="btn-group btn col-lg-2 p-2"
          aria-label="Large select example"
          id="outputLanguage"
          name="outputLanguage"
          defaultValue=""
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          style={{ backgroundColor: "rgb(219 219 219)" }}
        >
          <option value="" disabled>
            Guests
          </option>
          <option value="1">1 Adult</option>
          <option value="2">2 Adult</option>
          <option value="3">3 Adult</option>
          <option value="4">4 Adult</option>
        </select>
        <select
          className="btn-group btn col-lg-2 p-2 mx-4 rounded-3"
          aria-label="Large select example"
          id="outputLanguage"
          name="outputLanguage"
          defaultValue=""
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          style={{ backgroundColor: "rgb(219 219 219)" }}
        >
          <option value="" disabled>
            Children
          </option>
          <option value="1">1 Child</option>
          <option value="2">2 Child</option>
          <option value="3">3 Child</option>
          <option value="4">4 Child</option>
        </select>
        <input
          type="date"
          placeholder="Check in"
          className="btn text-black p-2"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          style={{ backgroundColor: "rgb(219 219 219)" }}
        />
        <button
          className="btn p-2 mx-5 text-white px-3"
          style={{ backgroundColor: "rgba(196, 156, 116, 1)" }}
          onClick={HotelCheckout}
        >
          Book
        </button>
      </div>
    </div>
  );
}
