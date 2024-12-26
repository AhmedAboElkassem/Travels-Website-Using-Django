import React from "react";
import image27 from "../../public/image 27.png";
import image28 from "../../public/image 28.png";
import image29 from "../../public/image 29.png";
import image30 from "../../public/Image.svg";
import Image from "next/image";
export default function Testimonials() {
  const Images = [image27, image28, image29, image27, image28];
  return (
    <>
      <div className="mx-10  row mtSp">
        <div className="col-lg-6">
          <p className="cata  text-start">Testimonials</p>
          <h3 className="text-start" style={{ fontSize: "60px" }}>
            What people say about Us.
          </h3>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="revSty col-lg-10 p-4  position-relative">
            <p>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <div>
              <h6>Mike taylor</h6>
              <p>Lahore, Pakistan</p>
            </div>

            <div
              className=" position-absolute"
              style={{ top: "-35px", left: "-33px" }}
            >
              <Image src={image30} alt="image"></Image>
            </div>
          </div>
        </div>
      </div>
      {/* /////////.//////////.//////// */}
      <div className="row mx-10 justify-content-center mt-5">
        {Images.map((img, index) => (
          <div className="col-lg-2" key={index}>
            <Image src={img} width={100} height={100} alt="image"></Image>
          </div>
        ))}
      </div>
    </>
  );
}
