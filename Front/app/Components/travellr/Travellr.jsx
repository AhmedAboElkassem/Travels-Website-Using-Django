import React from "react";
import Rectangle3 from "../../../public/Rectangle 3.png";
import Rectangle4 from "../../../public/Rectangle 4.png";
import Rectangle5 from "../../../public/Rectangle 5.png";
import Rectangle6 from "../../../public/Rectangle 6.png";
import Image from "next/image";
import Link from "next/link";
export default function Travellr() {
  const data = [
    {
      img: Rectangle3,
      name: "Melbourne",
      desc: "An amazing journey",
      price: "$ 700",
    },
    {
      img: Rectangle4,
      name: "Paris",
      desc: "A Paris Adventure",
      price: "$ 600",
    },
    {
      img: Rectangle5,
      name: "London",
      desc: "London eye adventure",
      price: "$ 350",
    },
    {
      img: Rectangle6,
      name: "Columbia",
      desc: "Amazing streets",
      price: "$ 700",
    },
  ];
  return (
    <>
      <div className="container my-5 ">
        <div className="row p-0">
          <div className="col-lg-8">
            <h1 className="cata+h3">Fall into travel</h1>
            <p className="cata text-start" style={{ fontSize: "18px" }}>
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
          </div>
          <div className="col-lg-4 text-end">
            <Link className="btn btn-primary" href="/alltravel">
              Show All
            </Link>
          </div>
        </div>

        <div className="row p-0 mt-5">
          {data.map((city, index) => (
            <div className="col-lg-3 mb-3 " key={index}>
              <div
                className="col-lg-12"
                style={{
                  height: "400px",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={city.img}
                  alt={city.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="text row justify-content-center text-white"
                  style={{
                    position: "absolute",
                    top: "16rem",
                    //   left: "10px",
                    margin: "0",
                    zIndex: "1",
                  }}
                >
                  {" "}
                  <div className="row">
                    <div className="col-lg-8">
                      <h3>{city.name}</h3>
                      <p style={{ fontSize: "12px" }}>{city.desc}</p>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end ">
                      <h3 className="fs-5">{city.price}</h3>
                    </div>
                  </div>
                  <div className="row w-100 ">
                    <button className="btn btn-primary justify-content-center">
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
