import Image from "next/image";
import React from "react";
import Rectangle1 from "../../public/Rectangle 13.png";
import Rectangle2 from "../../public/Rectangle 13 (1).png";
import Rectangle3 from "../../public/Rectangle 13 (2).png";
import ho2 from "../../public/Vector (2).png";

export default function Special() {
  const Rooms = [
    {
      image: Rectangle1,
      Name: "Room",
      Type: "Honeymoon",
      Desc: "Indulge in a Memorable One-Time Romantic Dinner for Two",
      numOfmember: "2",
      Price: "$699",
    },
    {
      image: Rectangle2,
      Name: "Room",
      Type: "Meetings",
      Desc: "Experience an Exclusively Private Environment to Boost Your Productivity",
      numOfmember: "30",
      Price: "$999",
    },
    {
      image: Rectangle3,
      Name: "Dining",
      Type: "Romantic Dining",
      Desc: "Indulge in a Memorable One-Time Romantic Dinner for Two",
      numOfmember: "2",
      Price: "$499",
    },
  ];
  return (
    <>
      <div className="container my-5 ">
        <p className="cata  text-start">Special Offers</p>
        <h3 className="text-start">Best offer of the month</h3>

        <div className="row mt-5 justify-content-between">
          {Rooms.map((room, index) => (
            <div className="col-lg-4 mb-3" key={index}>
              <div className="col-lg-11 p-3 sty">
                <div>
                  <Image
                    src={room.image}
                    // layout="responsive"
                    // width={100}
                    // height={100}
                    // className=" vh-10"
                    alt={room.Name}
                    style={{ width: "100%", height: "100%" }}
                  ></Image>
                </div>
                <p className="my-3">{room.Name}</p>
                <div className="row justify-content-between align-items-center">
                  <h3 className="col-lg-9">{room.Type} </h3>
                  <h6 className="col-lg-3 text-end">
                    <Image
                      src={ho2}
                      //   layout="responsive"
                      width={20}
                      height={20}
                      alt=""
                      // className=" vh-10"
                      //   style={{ width: "100%", height: "100%" }}
                    ></Image>
                    {room.numOfmember}
                  </h6>
                </div>
                <p className="crP mt-2">{room.Desc}</p>
                <div className="row  fs-2 my-4 justify-content-center  text-capitalize">
                  {room.Price}{" "}
                  <span className="col-lg-2 p-0 fs-5 mt-3">/night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="m-0 trend d-flex flex-column justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <h1 className="col-lg-5 text-center mb-4">
          Register now for this weekend and save up to 10%!
        </h1>
        <button
          className="btn  col-lg-2 py-2 rounded-5 text-white"
          style={{ backgroundColor: "#16617c" }}
        >
          Book Now
        </button>
      </div>
    </>
  );
}
